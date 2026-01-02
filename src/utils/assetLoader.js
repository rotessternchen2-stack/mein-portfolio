/**
 * Asset-Loader für Vite
 * Lädt alle Assets aus dem Portfolio-Ordner mit import.meta.glob
 */

// Lade alle Assets aus dem Portfolio-Ordner zur Build-Zeit
// Verwende ein Pattern, das alle Dateien erfasst (mit eager: true werden sie sofort geladen)
const assetModules = import.meta.glob('/src/assets/maria wallberg portfolio 2/**/*', { 
  eager: true,
  query: '?url',
  import: 'default'
});

// Cache für bereits geladene Assets
const assetCache = new Map();

/**
 * Erstellt einen Asset-URL basierend auf dem relativen Pfad
 * @param {string} relativePath - Relativer Pfad vom Portfolio-Ordner aus (z.B. "Fürstenschnitt (Hundefriseur) Reels-Shorts /video.mp4")
 * @returns {Promise<string>|string} URL zum Asset oder Fallback
 */
export const getAssetUrl = async (relativePath) => {
  // Normalisiere den Pfad
  let normalizedPath = relativePath.trim().replace(/^\/+/, '');
  
  // Prüfe Cache
  if (assetCache.has(normalizedPath)) {
    return assetCache.get(normalizedPath);
  }
  
  // Base-Pfad zum Portfolio-Ordner
  const basePath = '/src/assets/maria wallberg portfolio 2';
  
  // Erstelle verschiedene Pfad-Varianten
  const variants = [
    `${basePath}/${normalizedPath}`,
    `${basePath}/${normalizedPath.replace(/ /g, '%20')}`, // URL-encoded
  ];
  
  // Versuche, das Asset zu finden
  for (const variant of variants) {
    if (assetModules[variant]) {
      try {
        const asset = await assetModules[variant]();
        const url = asset.default || asset;
        assetCache.set(normalizedPath, url);
        return url;
      } catch (e) {
        continue;
      }
    }
  }
  
  // Fallback: Erstelle einen relativen Pfad, der von Vite serviert wird
  // Im Development-Modus serviert Vite Assets aus src/assets direkt
  const fallbackUrl = `${basePath}/${normalizedPath}`;
  assetCache.set(normalizedPath, fallbackUrl);
  return fallbackUrl;
};

/**
 * Synchroner Wrapper für getAssetUrl (für einfachere Verwendung)
 * @param {string} relativePath - Relativer Pfad vom Portfolio-Ordner aus
 * @returns {string} URL zum Asset
 */
export const getAssetUrlSync = (relativePath) => {
  // Sicherheit: Validiere Input
  if (!relativePath || typeof relativePath !== 'string') {
    return null;
  }
  
  // Sicherheit: Verhindere Path Traversal Angriffe (../ oder ..\)
  if (relativePath.includes('..') || relativePath.includes('\\')) {
    return null;
  }
  
  // Normalisiere den Pfad - entferne führende Slashes, aber behalte Leerzeichen!
  // WICHTIG: Nicht trimmen, da der Ordner Leerzeichen am Anfang hat
  let normalizedPath = relativePath.replace(/^\/+/, '');
  
  // Sicherheit: Max-Länge für Pfade
  if (normalizedPath.length > 500) {
    return null;
  }
  
  // Prüfe Cache
  if (assetCache.has(normalizedPath)) {
    return assetCache.get(normalizedPath);
  }
  
  // Base-Pfad zum Portfolio-Ordner für import.meta.glob
  const basePath = '/src/assets/maria wallberg portfolio 2';
  
  // Extrahiere den Dateinamen für besseres Matching
  const pathParts = normalizedPath.split('/');
  const filename = pathParts[pathParts.length - 1];
  const directory = pathParts.slice(0, -1).join('/');
  
  // Erstelle verschiedene Pfad-Varianten, die import.meta.glob verwenden könnte
  const variants = [
    `${basePath}/${normalizedPath}`,
    // Mit Leerzeichen am Anfang des Ordners
    `${basePath}/ ${normalizedPath}`,
    `${basePath}/${normalizedPath} `,
    `${basePath}/ ${normalizedPath} `,
    // Versuche auch mit URL-encoding
    `${basePath}/${normalizedPath.split('/').map(part => encodeURIComponent(part)).join('/')}`,
    // Versuche mit normalisierten Leerzeichen (aber behalte führende/nachfolgende)
    `${basePath}/${normalizedPath.replace(/\s+/g, ' ')}`,
  ];
  
  // Durchsuche alle geladenen Assets nach einem passenden Pfad
  for (const variant of variants) {
    if (assetModules[variant]) {
      const asset = assetModules[variant];
      // Wenn es ein Modul ist, hole die default export oder die URL direkt
      const url = asset?.default || asset;
      if (url) {
        assetCache.set(normalizedPath, url);
        // Asset gefunden
        return url;
      }
    }
  }
  
  // Wenn nicht gefunden, suche nach ähnlichen Pfaden (case-insensitive, mit/ohne Leerzeichen)
  const searchKey = normalizedPath.toLowerCase();
  const filenameLower = filename.toLowerCase();
  
  // Entferne führende/nachfolgende Leerzeichen für Vergleich
  const searchKeyTrimmed = searchKey.trim();
  const filenameTrimmed = filenameLower.trim();
  
  // WICHTIG: Zerlege den gesuchten Pfad in Teile für exaktes Matching
  const searchPathParts = normalizedPath.split('/').map(p => p.trim().toLowerCase());
  const searchDir = searchPathParts.slice(0, -1).join('/'); // Alles außer Dateiname
  const searchFilename = searchPathParts[searchPathParts.length - 1]; // Dateiname
  
  for (const [key, value] of Object.entries(assetModules)) {
    const keyNormalized = key.toLowerCase().replace(basePath.toLowerCase() + '/', '');
    const keyPathParts = keyNormalized.split('/').map(p => p.trim().toLowerCase());
    const keyDir = keyPathParts.slice(0, -1).join('/'); // Verzeichnis-Teil
    const keyFilename = keyPathParts[keyPathParts.length - 1]; // Dateiname
    
    // WICHTIG: Exaktes Matching - Verzeichnis UND Dateiname müssen übereinstimmen
    const isExactMatch = keyNormalized === searchKey || keyNormalized.trim() === searchKeyTrimmed;
    
    // Prüfe ob Verzeichnis übereinstimmt (mit Toleranz für Leerzeichen)
    const dirMatch = keyDir === searchDir || 
                     keyDir.includes(searchDir) || 
                     searchDir.includes(keyDir) ||
                     (keyDir.split('/').length === searchDir.split('/').length && 
                      keyDir.split('/').every((part, i) => 
                        searchDir.split('/')[i]?.includes(part) || part.includes(searchDir.split('/')[i])
                      ));
    
    // Prüfe ob Dateiname übereinstimmt
    const filenameMatch = keyFilename === searchFilename || 
                          keyFilename.includes(searchFilename) || 
                          searchFilename.includes(keyFilename);
    
    // NUR wenn Verzeichnis UND Dateiname übereinstimmen, verwende dieses Asset
    if (isExactMatch || (dirMatch && filenameMatch)) {
      const url = value?.default || value;
      if (url) {
        assetCache.set(normalizedPath, url);
        return url;
      }
    }
  }
  
  // Fallback: Versuche new URL (funktioniert manchmal)
  try {
    const relativeAssetPath = `../assets/maria wallberg portfolio 2/${normalizedPath}`;
    const url = new URL(relativeAssetPath, import.meta.url).href;
    assetCache.set(normalizedPath, url);
    return url;
  } catch (e) {
    // Letzter Fallback: Gib den Pfad zurück
    return `${basePath}/${normalizedPath}`;
  }
};
