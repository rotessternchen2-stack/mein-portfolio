import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "@hooks/useTranslation";
import PlantOverlay from "@components/PlantOverlay";
import OrganicShape from "@components/OrganicShape";
import { getFolderBySlug } from "@utils/portfolioStructure";
import { getAssetUrlSync } from "@utils/assetLoader";

// Lightbox-Komponente für Bildergalerie
const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate(-1);
      } else if (e.key === 'ArrowRight') {
        onNavigate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!images || images.length === 0 || currentIndex === null) return null;

  const currentImage = images[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      style={{ zIndex: 50 }}
    >
      {/* Schließen-Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-neutral-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
        aria-label="Schließen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Bild-Container */}
      <div 
        className="relative max-w-7xl max-h-full flex items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vorheriges Bild */}
        {hasPrevious && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="bg-white/95 hover:bg-white text-neutral-900 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-10 flex-shrink-0"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Bild */}
        <div className="relative max-w-full max-h-[90vh] flex items-center justify-center flex-1">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          )}
          <img
            ref={imgRef}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>

        {/* Nächstes Bild */}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="bg-white/95 hover:bg-white text-neutral-900 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-10 flex-shrink-0"
            aria-label="Nächstes Bild"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Bild-Info */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-neutral-900 px-6 py-3 rounded-full shadow-lg">
        <p className="text-sm font-medium">{currentImage.title}</p>
        <p className="text-xs text-neutral-600 mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

// Image-Card Komponente mit dynamischem Aspect-Ratio basierend auf Bild-Dimensionen
const ImageCard = ({ src, alt, title, filename, onClick }) => {
  const { t } = useTranslation();
  const imgRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState('aspect-square'); // Default
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Reset beim Wechsel des Bildes
    setIsLoading(true);
    setAspectRatio('aspect-square'); // Default zurücksetzen

    const handleLoad = () => {
      // Warte kurz, um sicherzustellen, dass die Dimensionen verfügbar sind
      setTimeout(() => {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        
        if (naturalWidth && naturalHeight && naturalWidth > 0 && naturalHeight > 0) {
          const ratio = naturalWidth / naturalHeight;
          
          // Bestimme das Aspect-Ratio basierend auf dem tatsächlichen Bild-Format
          // WICHTIG: ratio < 1 bedeutet höher als breit (Portrait)
          // Reels sind typischerweise 9:16 = 0.5625
          if (ratio < 0.65) {
            // Sehr hohes Format (z.B. Reels/Stories 9:16)
            setAspectRatio('aspect-[9/16]');
          } else if (ratio < 0.9) {
            // Hochformat (Portrait) - z.B. 3:4 = 0.75
            setAspectRatio('aspect-[3/4]');
          } else if (ratio >= 0.9 && ratio <= 1.1) {
            // Quadratisch
            setAspectRatio('aspect-square');
          } else if (ratio > 1.1 && ratio < 1.6) {
            // Leichtes Querformat - z.B. 4:3 = 1.33
            setAspectRatio('aspect-[4/3]');
          } else {
            // Starkes Querformat (Landscape) - z.B. 16:9 = 1.78
            setAspectRatio('aspect-video');
          }
        }
        setIsLoading(false);
      }, 50);
    };

    const handleError = () => {
      setImageError(true);
      setIsLoading(false);
    };

    // Prüfe ob Bild bereits geladen ist
    if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      handleLoad();
    } else {
      // Warte auf vollständiges Laden
      img.addEventListener('load', handleLoad, { once: true });
      img.addEventListener('error', handleError, { once: true });
      
      // Fallback: Prüfe nach kurzer Zeit nochmal
      const timeoutId = setTimeout(() => {
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          handleLoad();
        }
      }, 500);
      
      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
        clearTimeout(timeoutId);
      };
    }
    
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  if (imageError) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300">
        <div className="aspect-square flex items-center justify-center bg-primary-50 text-primary-400 p-8">
          <div className="text-center">
            <span className="text-4xl mb-2 block">🖼️</span>
            <p className="text-sm font-medium">Bild konnte nicht geladen werden</p>
          </div>
        </div>
        <div className="p-4 bg-white">
          <h4 className="text-neutral-900 font-bold text-sm mb-1 line-clamp-2">{title}</h4>
          <p className="text-neutral-500 text-xs truncate">{filename}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300 cursor-pointer" onClick={onClick}>
      <div className={`${aspectRatio} overflow-hidden bg-primary-50 flex items-center justify-center relative`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        )}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          title={title}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
      <div className="p-4 bg-white">
        <h4 className="text-neutral-900 font-bold text-sm mb-1 line-clamp-2">{title}</h4>
        <p className="text-neutral-500 text-xs truncate">{filename}</p>
      </div>
    </div>
  );
};

// Einfache Video-Player Komponente mit dynamischem Aspect-Ratio
const VideoPlayer = ({ src, title, filename, relativePath }) => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState('aspect-square');
  const [isLoading, setIsLoading] = useState(true);

  const updateAspectRatio = (video) => {
    if (!video || video.videoWidth === 0 || video.videoHeight === 0) return;
    
    const ratio = video.videoWidth / video.videoHeight;
    
    if (ratio < 0.65) {
      setAspectRatio('aspect-[9/16]'); // Reels/Stories
    } else if (ratio < 0.9) {
      setAspectRatio('aspect-[3/4]'); // Portrait
    } else if (ratio >= 0.9 && ratio <= 1.1) {
      setAspectRatio('aspect-square'); // Quadratisch
    } else if (ratio > 1.1 && ratio < 1.6) {
      setAspectRatio('aspect-[4/3]'); // Leichtes Querformat
    } else {
      setAspectRatio('aspect-video'); // Querformat
    }
    setIsLoading(false);
  };

  const handleLoadedMetadata = (e) => {
    updateAspectRatio(e.target);
  };

  // Bestimme max-width basierend auf Aspect-Ratio
  // Reels sind 9:16 Format - sehr schmal und hoch
  const getMaxWidth = () => {
    if (aspectRatio === 'aspect-[9/16]') {
      return 'max-w-[280px]'; // Etwas größer für Reels (9:16 Format)
    } else if (aspectRatio === 'aspect-[3/4]') {
      return 'max-w-[350px]'; // Portrait 3:4
    }
    return 'max-w-full'; // Volle Breite für Querformat
  };
  
  // Bestimme max-height basierend auf Aspect-Ratio
  const getMaxHeight = () => {
    if (aspectRatio === 'aspect-[9/16]') {
      return 'max-h-[498px]'; // Höhe für Reels bei 280px Breite (9:16 Verhältnis)
    }
    return '400px'; // Standard-Höhe
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 bg-gradient-to-br from-white to-primary-50 ${getMaxWidth()} mx-auto`}>
      <div className={`${aspectRatio} overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center relative w-full`} style={{ maxHeight: getMaxHeight() }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary-50 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        )}
        <video
          ref={videoRef}
          src={src}
          controls
          preload="metadata"
          className="w-full h-full object-contain bg-black/5"
          title={title}
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={(e) => {
            if (isLoading) {
              updateAspectRatio(e.target);
            }
          }}
          onError={(e) => {
            setIsLoading(false);
            e.target.style.display = 'none';
            const parent = e.target.parentElement;
            if (parent && !parent.querySelector('.error-fallback')) {
              const errorDiv = document.createElement('div');
              errorDiv.className = 'error-fallback w-full h-full flex flex-col items-center justify-center bg-primary-50 text-primary-400 p-4';
              
              // Sicher: Verwende textContent statt innerHTML für XSS-Schutz
              const emojiSpan = document.createElement('span');
              emojiSpan.className = 'text-4xl mb-2';
              emojiSpan.textContent = '🎥';
              
              const errorText = document.createElement('p');
              errorText.className = 'text-sm text-center font-medium';
              errorText.textContent = t('portfolio.detail.videoError');
              
              errorDiv.appendChild(emojiSpan);
              errorDiv.appendChild(errorText);
              parent.appendChild(errorDiv);
            }
          }}
        >
          <source src={src} type="video/mp4" />
          {t('portfolio.detail.videoNotSupported')}
        </video>
      </div>
      <div className="p-5 bg-white">
        <h4 className="text-neutral-900 font-bold text-lg mb-1 line-clamp-2">{title}</h4>
        <p className="text-neutral-500 text-xs truncate">{filename}</p>
      </div>
    </div>
  );
};

const PortfolioDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  // Sicherheit: Validiere und sanitize slug Parameter
  const sanitizeSlug = (inputSlug) => {
    if (!inputSlug || typeof inputSlug !== 'string') return null;
    // Erlaube nur alphanumerische Zeichen, Bindestriche und Unterstriche
    const sanitized = inputSlug.replace(/[^a-zA-Z0-9-_]/g, '');
    // Max-Länge für Slug
    return sanitized.length > 100 ? null : sanitized;
  };
  
  const safeSlug = sanitizeSlug(slug);
  const folder = safeSlug ? getFolderBySlug(safeSlug) : null;
  
  // Lightbox State
  const [allImages, setAllImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Scroll nach oben beim Laden der Seite oder bei Slug-Änderung
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug, location.pathname]);
  
  // Einfacher Zurück-Button mit fester Scroll-Position
  const handleBackClick = () => {
    // Sicherheit: Validiere Scroll-Position vor dem Speichern
    const scrollPosition = '2000';
    if (parseInt(scrollPosition, 10) >= 0 && parseInt(scrollPosition, 10) <= 100000) {
      sessionStorage.setItem('portfolioScrollPosition', scrollPosition);
    }
    
    // Navigiere direkt mit window.location für zuverlässige Navigation
    // Sicherheit: Nur relative Pfade erlauben
    window.location.href = '/portfolio';
  };
  
  // Lightbox-Funktionen
  const openLightbox = (imageIndex) => {
    setLightboxIndex(imageIndex);
  };
  
  const closeLightbox = () => {
    setLightboxIndex(null);
  };
  
  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < allImages.length) {
      setLightboxIndex(newIndex);
    }
  };
  
  // Funktion zum Erstellen von professionellen Titeln basierend auf Dateinamen
  const createTitle = (filename, type, folderName = '') => {
    // Entferne Dateiendung und normalisiere
    let title = filename
      .replace(/\.(png|jpg|jpeg|mp4|pdf)$/i, '')
      .replace(/\(für den Kunden\)/gi, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Professionelle Titel für Videos
    if (type === 'video') {
      if (filename.includes('Ablauf Hund friseren')) {
        title = 'Grooming-Prozess: Ablauf Hund frisieren';
      } else if (filename.includes('Fall in Love')) {
        title = 'Social Media Reel: Fall in Love';
      } else if (filename.includes('Weihnachtsaktion')) {
        title = 'Weihnachtskampagne: Plätzchen-Aktion';
      } else if (filename.includes('Paw Buddy')) {
        if (filename.includes('(1)')) {
          title = 'PawBuddy Marketing Reel: Variante 1';
        } else {
          title = 'PawBuddy Marketing Reel';
        }
      } else if (filename.includes('Balea Shampoo')) {
        title = 'Balea Shampoo Produkt-Reel';
      } else {
        title = title.charAt(0).toUpperCase() + title.slice(1);
      }
    }
    
    // Professionelle Titel für Bilder
    else if (type === 'image') {
      // Etikett Design
      if (filename.match(/^[123]\.png$/) && folderName.includes('Etikett')) {
        title = `Etikett Design: Variante ${filename.replace('.png', '')}`;
      }
      // Kochbuch Check24
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Kochbuch')) {
        const pageNum = filename.replace('.png', '');
        title = `Kochbuch-Gestaltung: Seite ${pageNum}`;
      }
      // CD Pflegevertrag
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Pflegevertrag')) {
        const pageNum = filename.replace('.png', '');
        title = `Corporate Design: Pflegevertrag (Seite ${pageNum})`;
      }
      // ObenAuf Kaffeemanufaktur
      else if (filename.match(/^\d+\.png$/) && folderName.includes('ObenAuf') && !folderName.includes('Tischaufsteller')) {
        title = `Corporate Design: ObenAuf Kaffeemanufaktur`;
      }
      // ObenAuf Tischaufsteller
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Tischaufsteller')) {
        const variant = filename.replace('.png', '');
        title = `Corporate Design: Tischaufsteller Variante ${variant}`;
      }
      // Social Media Ads - Beiträge
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Recruiting')) {
        const adNum = filename.replace('.png', '');
        title = `Social Media Ad: Recruiting (Ad ${adNum})`;
      }
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Seniocon')) {
        const adNum = filename.replace('.png', '');
        title = `Social Media Ad: Seniocon GmbH (Ad ${adNum})`;
      }
      else if (filename.match(/^\d+\.png$/) && folderName.includes('swb solar')) {
        const adNum = filename.replace('.png', '');
        title = `Social Media Ad: SWB Solar (Ad ${adNum})`;
      }
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Schermuly') && folderName.includes('Beiträge')) {
        title = `Social Media Ad: Schermuly Energietechnik`;
      }
      else if (filename.includes('Schermuly.png')) {
        title = 'Social Media Ad: Schermuly Energietechnik';
      }
      // Instagram Stories
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Pflegewerke')) {
        title = `Instagram Story: Pflegewerke`;
      }
      else if (filename.match(/^\d+\.png$/) && folderName.includes('Schermuly') && folderName.includes('Story')) {
        const storyNum = filename.replace('.png', '');
        title = `Instagram Story: Schermuly (Story ${storyNum})`;
      }
      else if (filename.match(/^\d+\.png$/)) {
        // Generischer Fall für nummerierte Bilder
        const num = filename.replace('.png', '');
        title = `Design-Element ${num}`;
      }
      else {
        // Generischer Titel mit Großbuchstaben am Anfang
        title = title.charAt(0).toUpperCase() + title.slice(1);
      }
    }
    
    // Professionelle Titel für Dokumente
    else if (type === 'document') {
      if (filename.includes('PawBuddy') && !filename.includes('Zusammenfassung')) {
        title = 'PawBuddy Kampagne: Portfolio-Dokumentation';
      } else if (filename.includes('Zusammenfassung')) {
        title = 'PawBuddy Kampagne: Projekt-Zusammenfassung';
      } else if (filename.includes('UX-Projekt') || filename.includes('UX Ausarbeitung')) {
        title = 'UX Design: LVB Ausarbeitung';
      } else if (filename.includes('Digitale-Medienproduktion') || filename.includes('Digitale Meidenproduktion')) {
        title = 'CrossMedia Kampagne: Projekt-Dokumentation';
      } else {
        title = title.charAt(0).toUpperCase() + title.slice(1);
      }
    }
    
    return title || filename;
  };
  
  // Funktion zum Erstellen von Alt-Texten für Bilder
  const createAltText = (filename, folderName) => {
    const title = createTitle(filename, 'image', folderName);
    return `${title} aus ${folderName}`;
  };
  
  // Funktion zum Sammeln aller Bilder für die Lightbox
  const collectAllImages = (items, basePath, parentPath = '') => {
    const images = [];
    
    const processItems = (itemsToProcess, currentPath) => {
      itemsToProcess.forEach(item => {
        const itemPath = currentPath ? `${currentPath}/${item.name}` : item.name;
        
        // Sammle Bilder aus Dateien
        if (item.files) {
          item.files.forEach(file => {
            if (file.type === 'image') {
              let normalizedBasePath = basePath.replace(/^maria wallberg portfolio 2\/?/, '');
              let normalizedSubfolder = itemPath;
              const normalizedFilename = file.name;
              
              let relativePath;
              if (normalizedSubfolder && normalizedSubfolder.trim() !== '') {
                relativePath = `${normalizedBasePath}/${normalizedSubfolder}/${normalizedFilename}`;
              } else {
                relativePath = `${normalizedBasePath}/${normalizedFilename}`;
              }
              
              relativePath = relativePath.replace(/^\/+/, '').replace(/\/+/g, '/');
              const assetPath = getAssetUrlSync(relativePath);
              
              if (assetPath) {
                const imageTitle = createTitle(file.name, 'image', folder.name);
                const altText = createAltText(file.name, folder.name);
                images.push({ src: assetPath, alt: altText, title: imageTitle });
              }
            }
          });
        }
        
        // Rekursiv Unterordner verarbeiten
        if (item.subfolders) {
          processItems(item.subfolders, itemPath);
        }
      });
    };
    
    processItems(items, parentPath);
    return images;
  };
  
  // Sammle alle Bilder beim ersten Render (nur bei Slug-Änderung)
  useEffect(() => {
    if (!folder || !slug) return;
    
    const images = [];
    
    // Bilder aus Root-Dateien
    if (folder.files) {
      folder.files.forEach(file => {
        if (file.type === 'image') {
            let normalizedBasePath = folder.path.replace(/^maria wallberg portfolio 2\/?/, '');
            const relativePath = `${normalizedBasePath}/${file.name}`.replace(/\/+/g, '/').replace(/^\/+/, '');
          const assetPath = getAssetUrlSync(relativePath);
          
          if (assetPath) {
            const imageTitle = createTitle(file.name, 'image', folder.name);
            const altText = createAltText(file.name, folder.name);
            images.push({ src: assetPath, alt: altText, title: imageTitle });
          }
        }
      });
    }
    
    // Bilder aus Unterordnern
    if (folder.subfolders) {
      const subfolderImages = collectAllImages(folder.subfolders, folder.path);
      images.push(...subfolderImages);
    }
    
    setAllImages(images);
  }, [slug]); // Nur bei Slug-Änderung, nicht bei jedem Render

  if (!folder) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">{t('portfolio.detail.notFound.title')}</h1>
          <p className="text-lg text-neutral-700 mb-8">{t('portfolio.detail.notFound.description')}</p>
          <Link 
            to="/portfolio"
            onClick={() => {
              // Entferne Scroll-Position, damit wir oben landen
              sessionStorage.removeItem('portfolioScrollPosition');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
          >
            {t('portfolio.detail.notFound.backButton')}
          </Link>
        </div>
      </div>
    );
  }

  // Rekursive Funktion zum Rendern von Dateien und Unterordnern
  const renderContent = (items, level = 0, parentPath = '') => {
    if (!items || items.length === 0) return null;

    // Spezielles Layout für PawBuddy: Dokumente nebeneinander, Reels darunter nebeneinander
    if (folder.slug === 'pawbuddy-kampagne' && level === 0 && items.length > 1) {
      // Trenne Dokumente und Videos
      const documents = items.filter(item => 
        item.name === 'Portfolio' || item.name === 'Zusammenfassung'
      );
      const videos = items.filter(item => item.name === 'Reels');
      
      return (
        <div className="space-y-12 mt-12">
          {/* Dokumente nebeneinander */}
          {documents.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Dokumente</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((item, index) => {
                  const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
                  return (
                    <div key={index} className="space-y-4">
                      <h3 className="text-xl font-bold text-neutral-900 mb-4 border-b-2 border-primary-200 pb-2">
                        {item.name}
                      </h3>
                      {item.files && item.files.length > 0 && (
                        <div className="space-y-4">
                          {item.files.map((file, fileIndex) => renderFile(file, folder.path, currentPath, fileIndex))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Reels darunter nebeneinander */}
          {videos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Reels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {videos.flatMap((item) => {
                  const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
                  // Rendere alle Videos direkt nebeneinander (flach)
                  return item.files ? item.files.map((file, fileIndex) => 
                    renderFile(file, folder.path, currentPath, fileIndex)
                  ) : [];
                })}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Wenn es mehrere Unterordner auf derselben Ebene gibt, zeige sie nebeneinander
    if (level === 0 && items.length > 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {items.map((item, index) => {
            const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
            return (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 border-b-2 border-primary-200 pb-2">
                  {item.name}
                </h3>
                {/* Dateien im Unterordner */}
                {item.files && item.files.length > 0 && (
                  <div className="space-y-4">
                    {item.files.map((file, fileIndex) => renderFile(file, folder.path, currentPath, fileIndex))}
                  </div>
                )}
                {/* Rekursiv Unterordner rendern */}
                {item.subfolders && item.subfolders.length > 0 && (
                  renderContent(item.subfolders, level + 1, currentPath)
                )}
              </div>
            );
          })}
        </div>
      );
    }

    // Standard-Layout für verschachtelte Unterordner
    return items.map((item, index) => {
      const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
      
      return (
        <div key={index} className={`${level > 0 ? 'ml-8 mt-8' : 'mt-12'}`}>
          <h3 className={`font-bold text-neutral-900 mb-4 ${
            level === 0 ? 'text-2xl' : level === 1 ? 'text-xl' : 'text-lg'
          }`}>
            {item.name}
          </h3>
          <div className="space-y-6">
            {/* Dateien im Unterordner */}
            {item.files && item.files.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {item.files.map((file, fileIndex) => renderFile(file, folder.path, currentPath, fileIndex))}
              </div>
            )}
            {/* Rekursiv Unterordner rendern */}
            {item.subfolders && item.subfolders.length > 0 && (
              renderContent(item.subfolders, level + 1, currentPath)
            )}
          </div>
        </div>
      );
    });
  };

  // Funktion zum Rendern einer einzelnen Datei
  const renderFile = (file, basePath, subfolderName = '', index) => {
    // Erstelle den Asset-Pfad relativ zum Portfolio-Ordner
    // basePath ist z.B. "maria wallberg portfolio 2/ads für Scial Media"
    // Entferne "maria wallberg portfolio 2/" vom Anfang, aber behalte Leerzeichen!
    let normalizedBasePath = basePath.replace(/^maria wallberg portfolio 2\/?/, '');
    
    // Normalisiere den Subfolder-Pfad (kann mehrere Ebenen enthalten wie "Beiträge/Recruiting")
    // WICHTIG: Nicht trimmen, da Ordner Leerzeichen enthalten können!
    let normalizedSubfolder = subfolderName;
    
    // Dateiname nicht trimmen, da er Leerzeichen enthalten kann
    const normalizedFilename = file.name;
    
    // Erstelle den relativen Pfad vom Portfolio-Ordner aus
    let relativePath;
    if (normalizedSubfolder && normalizedSubfolder.trim() !== '') {
      // Kombiniere basePath und subfolder korrekt
      // normalizedBasePath ist z.B. "ads für Scial Media"
      // normalizedSubfolder ist z.B. "Beiträge/Recruiting"
      // normalizedFilename ist z.B. "1.png"
      relativePath = `${normalizedBasePath}/${normalizedSubfolder}/${normalizedFilename}`;
    } else {
      relativePath = `${normalizedBasePath}/${normalizedFilename}`;
    }
    
    // Normalisiere den Pfad (entferne doppelte Slashes, aber behalte führende Leerzeichen!)
    relativePath = relativePath.replace(/\/+/g, '/').replace(/^\/+/, '');
    
    // Verwende den Asset-Loader (synchron für einfachere Verwendung)
    const assetPath = getAssetUrlSync(relativePath);

    if (file.type === 'image') {
      const imageTitle = createTitle(file.name, 'image', folder.name);
      const altText = createAltText(file.name, folder.name);
      
      // Finde den Index dieses Bildes in der allImages-Liste
      const imageIndex = allImages.findIndex(img => img.src === assetPath);
      
      return (
        <ImageCard
          key={index}
          src={assetPath}
          alt={altText}
          title={imageTitle}
          filename={file.name}
          onClick={() => {
            if (imageIndex !== -1) {
              openLightbox(imageIndex);
            }
          }}
        />
      );
    }

    if (file.type === 'video') {
      const videoTitle = createTitle(file.name, 'video', folder.name);
      
      return (
        <VideoPlayer
          key={index}
          src={assetPath}
          title={videoTitle}
          filename={file.name}
          relativePath={relativePath}
        />
      );
    }

    if (file.type === 'document') {
      const documentTitle = createTitle(file.name, 'document', folder.name);
      
      return (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300 p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center text-3xl">
              📄
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-neutral-900 font-bold truncate mb-1">{documentTitle}</h4>
              <p className="text-neutral-500 text-xs truncate mb-1">{file.name}</p>
              <p className="text-neutral-500 text-sm">{t('portfolio.detail.document')}</p>
            </div>
            <a
              href={assetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors"
            >
              {t('portfolio.detail.open')}
            </a>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden">
      
      {/* Pflanzen-Overlays */}
      <PlantOverlay position="top-right" opacity={0.05} color="text-primary-300" />
      <PlantOverlay position="bottom-left" opacity={0.05} color="text-accent-300" />
      
      {/* Organische Hintergrund-Shapes */}
      <div className="absolute top-40 left-10 w-64 h-64 text-primary-200 opacity-15 pointer-events-none">
        <OrganicShape variant="blob1" className="w-full h-full" animate={true} />
      </div>
      
      <article className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors relative z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('portfolio.detail.backToPortfolio')}
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${folder.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
              {folder.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-2">
                {folder.name}
              </h1>
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full">
                {t(`portfolio.folders.${folder.slug}.category`) || 
                  t(`portfolio.folders.${folder.slug.replace(/-/g, '')}.category`) || 
                  (folder.slug.includes('-') ? t(`portfolio.folders.${folder.slug.replace(/-/g, '')}.category`) : null) ||
                  folder.type}
              </span>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
        </div>
        
        {/* Hauptinhalt - Dateien im Root-Ordner */}
        {folder.files && folder.files.length > 0 && (
          <div className="mb-12">
            {/* Spezielles Layout für CrossMedia Kampagne: Videos und Dokumente nebeneinander */}
            {folder.slug === 'crossmedia-dm' ? (
              (() => {
                const videos = folder.files.filter(f => f.type === 'video');
                const otherFiles = folder.files.filter(f => f.type !== 'video');
                
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Videos */}
                    {videos.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('portfolio.detail.videos')}</h2>
                        <div className="space-y-6">
                          {videos.map((file, index) => renderFile(file, folder.path, '', index))}
                        </div>
                      </div>
                    )}
                    
                    {/* Andere Dateien (Dokumente) */}
                    {otherFiles.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('portfolio.detail.otherFiles')}</h2>
                        <div className="space-y-6">
                          {otherFiles.map((file, index) => renderFile(file, folder.path, '', index))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            ) : (
              // Standard-Layout: Videos oben, andere Dateien darunter
              (() => {
                const videos = folder.files.filter(f => f.type === 'video');
                const otherFiles = folder.files.filter(f => f.type !== 'video');
                
                return (
                  <>
                    {/* Videos in einem speziellen Grid */}
                    {videos.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('portfolio.detail.videos')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                          {videos.map((file, index) => renderFile(file, folder.path, '', index))}
                        </div>
                      </div>
                    )}
                    
                    {/* Andere Dateien (Bilder, Dokumente) */}
                    {otherFiles.length > 0 && (
                      <div>
                        {videos.length > 0 && (
                          <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('portfolio.detail.otherFiles')}</h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {otherFiles.map((file, index) => renderFile(file, folder.path, '', index))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()
            )}
          </div>
        )}
        
        {/* Unterordner */}
        {folder.subfolders && folder.subfolders.length > 0 && (
          <div className="space-y-8">
            {renderContent(folder.subfolders, 0)}
          </div>
        )}
        
        {/* CTA zurück zum Portfolio */}
        <div className="mt-16 text-center relative z-10">
          <button
            onClick={handleBackClick}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('portfolio.detail.backToPortfolio')}
          </button>
        </div>
      </article>
      
      {/* Easter Egg: Floating plant bottom right */}
      <div className="fixed bottom-8 right-8 w-20 h-20 text-primary-400 opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float z-50"
           title={t('portfolio.easterEggTooltip')}>
        <OrganicShape variant="monsteraLeaf" className="w-full h-full hover:animate-wiggle" />
      </div>
      
      {/* Lightbox */}
      {lightboxIndex !== null && allImages.length > 0 && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </div>
  );
};

export default PortfolioDetail;

