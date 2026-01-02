/**
 * Utility-Funktion zur Analyse der Portfolio-Ordnerstruktur
 */

/**
 * Analysiert die Ordnerstruktur rekursiv
 * @returns {Array} Liste aller Hauptordner mit ihren Details
 */
export const getPortfolioStructure = () => {
  // Liste aller Hauptordner mit vollständiger Struktur
  const mainFolders = [
    {
      name: "Social Media Reels: Fürstenschnitt Hundefriseur",
      slug: "fuerstenschnitt-reels",
      path: "maria wallberg portfolio 2/ Fürstenschnitt (Hundefriseur) Reels-Shorts ",
      type: "video",
      icon: "🎥",
      color: "from-accent-500 to-primary-500",
      files: [
        { name: "Ablauf Hund friseren (für den Kunden) .mp4", type: "video" },
        { name: "Fall in Love.mp4", type: "video" },
        { name: "Weihnachtsaktion Plätzchen.mp4", type: "video" }
      ],
      subfolders: []
    },
    {
      name: "Social Media Advertising",
      slug: "ads-social-media",
      path: "maria wallberg portfolio 2/ads für Scial Media",
      type: "mixed",
      icon: "📱",
      color: "from-primary-400 to-accent-400",
      files: [],
      subfolders: [
        {
          name: "Beiträge",
          files: [],
          subfolders: [
            {
              name: "Recruiting",
              files: [
                { name: "1.png", type: "image" },
                { name: "2.png", type: "image" }
              ],
              subfolders: []
            },
            {
              name: "Schermuly",
              files: [
                { name: "Schermuly.png", type: "image" }
              ],
              subfolders: []
            },
            {
              name: "Seniocon GmbH",
              files: Array.from({ length: 10 }, (_, i) => ({ name: `${i + 1}.png`, type: "image" })),
              subfolders: []
            },
            {
              name: "swb solar",
              files: Array.from({ length: 12 }, (_, i) => ({ name: `${i + 1}.png`, type: "image" })),
              subfolders: []
            }
          ]
        },
        {
          name: "Story",
          files: [],
          subfolders: [
            {
              name: "Pflegewerke",
              files: [
                { name: "501012.png", type: "image" }
              ],
              subfolders: []
            },
            {
              name: "Schermuly",
              files: Array.from({ length: 7 }, (_, i) => ({ name: `${i + 1}.png`, type: "image" })),
              subfolders: []
            }
          ]
        }
      ]
    },
    {
      name: "Corporate Design: Pflegevertrag (Englisch)",
      slug: "cd-pflegevertrag",
      path: "maria wallberg portfolio 2/CD Pflegevertrag auf Englisch für FrisorSalon",
      type: "image",
      icon: "📄",
      color: "from-primary-500 to-primary-700",
      files: Array.from({ length: 9 }, (_, i) => ({ name: `${i + 1}.png`, type: "image" })),
      subfolders: []
    },
    {
      name: "CrossMedia Kampagne: dm Drogeriemarkt",
      slug: "crossmedia-dm",
      path: "maria wallberg portfolio 2/CrossMedia Kampange dm ausarbeitung",
      type: "mixed",
      icon: "🎨",
      color: "from-accent-400 to-primary-400",
      files: [
        { name: " Balea Shampoo Reel Maria Wallberg.mp4", type: "video" },
        { name: "LEIPZIG_102206818_Projekt-Digitale-Medienproduktion_Mai.pdf", type: "document" }
      ],
      subfolders: []
    },
    {
      name: "Grafikdesign: Etikett Design",
      slug: "etikett-design",
      path: "maria wallberg portfolio 2/Etikett Design Privates Projekt",
      type: "image",
      icon: "🏷️",
      color: "from-primary-400 to-accent-500",
      files: [
        { name: "1.png", type: "image" },
        { name: "2.png", type: "image" },
        { name: "3.png", type: "image" }
      ],
      subfolders: []
    },
    {
      name: "Marketing Kampagne: PawBuddy",
      slug: "pawbuddy-kampagne",
      path: "maria wallberg portfolio 2/Kampange PawBuddy Ausarbeitung",
      type: "mixed",
      icon: "🐕",
      color: "from-accent-500 to-primary-500",
      files: [],
      subfolders: [
        {
          name: "Portfolio",
          files: [
            { name: "Kopie von PawBuddy.pdf", type: "document" }
          ],
          subfolders: []
        },
        {
          name: "Reels",
          files: [
            { name: "Paw Buddy (1).mp4", type: "video" },
            { name: "Paw Buddy.mp4", type: "video" }
          ],
          subfolders: []
        },
        {
          name: "Zusammenfassung",
          files: [
            { name: "Kopie von Maria Wallberg 102206818 Leipzig Digitale MeidenproduktionZusammenfassung.pdf (1).pdf.pdf", type: "document" }
          ],
          subfolders: []
        }
      ]
    },
    {
      name: "Print Design: Kochbuch Check24",
      slug: "kochbuch-check24",
      path: "maria wallberg portfolio 2/Kochbuch Check24 Abschiedgeschenk",
      type: "image",
      icon: "📖",
      color: "from-primary-500 to-accent-500",
      files: Array.from({ length: 40 }, (_, i) => ({ name: `${i + 1}.png`, type: "image" })),
      subfolders: []
    },
    {
      name: "Corporate Design: ObenAuf Kaffeemanufaktur",
      slug: "obenauf-kaffee",
      path: "maria wallberg portfolio 2/ObenAuf Kaffeemanufaktur CD",
      type: "image",
      icon: "☕",
      color: "from-accent-400 to-primary-600",
      files: [
        { name: "2.png", type: "image" }
      ],
      subfolders: [
        {
          name: "Tischaufsteller",
          files: [
            { name: "1.png", type: "image" },
            { name: "2.png", type: "image" }
          ],
          subfolders: []
        }
      ]
    },
    {
      name: "UX Design: Leipziger Verkehrsbetriebe (LVB)",
      slug: "ux-lvb",
      path: "maria wallberg portfolio 2/UX Ausarbeitung für lvb",
      type: "document",
      icon: "💡",
      color: "from-primary-400 to-accent-400",
      files: [
        { name: "UX-Projekt  Semester 6    2025.pdf", type: "document" }
      ],
      subfolders: []
    }
  ];

  return mainFolders;
};

/**
 * Erstellt eine URL-freundliche Slug aus einem Ordnernamen
 */
export const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Analysiert den Inhalt eines Ordners rekursiv
 * @param {string} folderPath - Relativer Pfad zum Ordner
 * @returns {Object} Strukturierte Inhalte
 */
export const analyzeFolderContent = (folderPath) => {
  // Diese Funktion wird zur Laufzeit verwendet, um die tatsächlichen Dateien zu finden
  // Da wir mit Vite arbeiten, müssen wir die Assets zur Build-Zeit importieren
  // Für die Laufzeit-Analyse verwenden wir einen anderen Ansatz
  
  const structure = {
    images: [],
    videos: [],
    documents: [],
    subfolders: []
  };

  // Diese Funktion wird in der Komponente implementiert, da wir
  // zur Laufzeit auf die Dateien zugreifen müssen
  return structure;
};

/**
 * Prüft den Dateityp basierend auf der Extension
 */
export const getFileType = (filename) => {
  const ext = filename.split('.').pop()?.toLowerCase();
  
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
    return 'image';
  }
  if (['mp4', 'mov', 'avi', 'webm'].includes(ext)) {
    return 'video';
  }
  if (['pdf', 'doc', 'docx'].includes(ext)) {
    return 'document';
  }
  return 'other';
};

/**
 * Erstellt einen Asset-Pfad für Vite
 * @param {string} folderPath - Relativer Pfad zum Ordner
 * @param {string} filename - Dateiname (optional, wenn subfolder vorhanden)
 * @param {string} subfolderName - Name des Unterordners (optional)
 * @returns {string} Vollständiger Pfad zum Asset
 */
export const getAssetPath = (folderPath, filename, subfolderName = '') => {
  // Normalisiere den Pfad - entferne Leerzeichen am Anfang/Ende
  const normalizedFolder = folderPath.trim();
  const normalizedFile = filename.trim();
  const normalizedSubfolder = subfolderName.trim();
  
  // Erstelle den Pfad relativ zu src/assets
  // Vite benötigt relative Pfade von src/assets aus
  if (normalizedSubfolder) {
    return new URL(`../assets/${normalizedFolder}/${normalizedSubfolder}/${normalizedFile}`, import.meta.url).href;
  }
  return new URL(`../assets/${normalizedFolder}/${normalizedFile}`, import.meta.url).href;
};

/**
 * Findet einen Ordner anhand seines Slugs
 * @param {string} slug - Slug des Ordners
 * @returns {Object|null} Ordner-Objekt oder null
 */
export const getFolderBySlug = (slug) => {
  const folders = getPortfolioStructure();
  return folders.find(folder => folder.slug === slug) || null;
};

