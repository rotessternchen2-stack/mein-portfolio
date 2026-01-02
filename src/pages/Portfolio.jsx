import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "@hooks/useTranslation";
import PlantOverlay from "@components/PlantOverlay";
import OrganicShape from "@components/OrganicShape";
import { getPortfolioStructure } from "@utils/portfolioStructure";

const Portfolio = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const portfolioFoldersRef = useRef(null);

  // Scroll-Position wiederherstellen beim Zurückkommen von Detail-Seite
  useEffect(() => {
    // Prüfe ob wir auf Mobile sind
    const isMobile = window.innerWidth < 768;
    
    // Prüfe ob wir von einer Detail-Seite kommen (durch sessionStorage)
    const scrollPosition = sessionStorage.getItem('portfolioScrollPosition');
    const fromDetail = location.state?.fromDetail;
    
    // Sicherheit: Validiere sessionStorage-Wert
    const isValidScrollPosition = (pos) => {
      const num = parseInt(pos, 10);
      return !isNaN(num) && num >= 0 && num <= 100000; // Max 100000px
    };
    
    // Auf Mobile immer nach oben scrollen
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      sessionStorage.removeItem('portfolioScrollPosition');
      return;
    }
    
    // Auf Desktop: Scroll zu gespeicherter Position wenn von Detail-Seite
    if (scrollPosition && fromDetail && isValidScrollPosition(scrollPosition)) {
      // Warte bis die Seite vollständig geladen ist
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(scrollPosition, 10),
          behavior: 'smooth'
        });
        sessionStorage.removeItem('portfolioScrollPosition');
      }, 100);
    } else {
      // Wenn nicht von Detail-Seite kommend, immer nach oben scrollen
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Entferne alte Scroll-Position falls vorhanden
      if (scrollPosition) {
        sessionStorage.removeItem('portfolioScrollPosition');
      }
    }
  }, [location.pathname, location.state]);


  const toggleDropdown = (id) => {
    setOpenDropdownId(prevId => prevId === id ? null : id);
  };

  // Portfolio Items mit Übersetzungen
  const portfolioItemsData = [
    {
      id: 1,
      key: "check24",
      tags: ["React", "Tailwind", "UI/UX", "Corporate Design"],
      color: "from-primary-400 to-primary-600",
      icon: "🌐",
      detailsKeys: ["frontend", "cd", "pm", "logo"],
      detailsIcons: ["💻", "🎨", "📋", "✨"]
    },
    {
      id: 2,
      key: "kulturleben",
      tags: ["Social Media", "Content Creation", "Branding"],
      color: "from-accent-400 to-accent-600",
      icon: "📱",
      links: [
        { key: "instagram", url: "https://www.instagram.com/kulturleben_leipzig/", icon: "📸" }
      ],
      detailsKeys: ["socialMedia", "content", "templates", "booth"],
      detailsIcons: ["📱", "✨", "🎨", "🎪"]
    },
    {
      id: 3,
      key: "leadfluss",
      tags: ["Grafikdesign", "Social Media", "Marketing"],
      color: "from-primary-500 to-accent-500",
      icon: "🎨",
      links: [
        { key: "website", url: "https://www.leadfluss.de/", icon: "🌐" },
        { key: "instagram", url: "https://www.instagram.com/leadfluss.de/", icon: "📸" }
      ],
      detailsKeys: ["graphic", "merch", "print", "socialMedia", "campaigns"],
      detailsIcons: ["🎨", "👕", "📄", "📱", "💡"]
    },
    {
      id: 4,
      key: "fuerstenpfote",
      tags: ["Social Media", "Video", "Grooming"],
      color: "from-accent-500 to-primary-500",
      icon: "✂️",
      links: [
        { key: "website", url: "https://fuerstenschnitt.com/", icon: "🌐" },
        { key: "instagram", url: "https://www.instagram.com/fuerstenpfote/", icon: "📸" }
      ],
      detailsKeys: ["socialMedia", "grooming", "video"],
      detailsIcons: ["📱", "✂️", "🎥"]
    },
    {
      id: 5,
      key: "doggystyle",
      tags: ["Wix", "Web Design", "Branding", "Grooming"],
      color: "from-primary-400 to-accent-400",
      icon: "🌐",
      links: [
        { key: "website", url: "https://www.hundesalondoggystylegrimma.com/", icon: "🌐" }
      ],
      detailsKeys: ["website", "branding", "training"],
      detailsIcons: ["🌐", "🎨", "✂️"]
    },
    {
      id: 6,
      key: "ducksWebsite",
      tags: ["Fun Project", "Web Design", "Kreativität", "Easter Egg"],
      color: "from-yellow-400 to-orange-400",
      icon: "🦆",
      links: [
        { key: "website", url: "https://enten-paradies.vercel.app/", icon: "🌐" }
      ],
      detailsKeys: ["creative", "webDesign", "content"],
      detailsIcons: ["🦆", "🎨", "✨"]
    },
    {
      id: 7,
      key: "uiux",
      tags: ["Figma", "UX", "Prototyping"],
      color: "from-accent-400 to-primary-400",
      icon: "💡",
      detailsKeys: ["ui", "ux", "prototyping"],
      detailsIcons: ["🎨", "🔍", "⚡"]
    }
  ];
  
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
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full mb-6">
            {t('portfolio.badge')}
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            {t('pages.portfolio.title')}
          </h1>
        <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            {t('pages.portfolio.content')}
          </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Portfolio Grid mit Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-start">
          {portfolioItemsData.map((item, index) => {
            const itemData = t(`portfolio.items.${item.key}`, { returnObjects: true });
            return (
            <div 
              key={item.id}
              className={`rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 self-start ${
                item.id === 6 
                  ? 'bg-gradient-to-br from-yellow-100 via-yellow-50 to-orange-100 border-yellow-300 hover:border-yellow-400' 
                  : 'bg-white border-primary-100 hover:border-primary-300'
              }`}
            >
              {/* Header - Klickbar für Dropdown */}
              <div 
                className={`h-32 bg-gradient-to-br ${item.color} relative overflow-hidden flex items-center justify-between px-6 cursor-pointer hover:shadow-lg transition-shadow`}
                onClick={() => toggleDropdown(item.id)}
              >
                {/* Subtiles Muster statt grober Blob */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {itemData.title}
                    </h3>
                    <span className="text-sm text-white/90 font-medium">
                      {itemData.category}
                    </span>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <svg 
                      className={`w-5 h-5 text-white transition-transform duration-300 ${openDropdownId === item.id ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`p-6 ${item.id === 6 ? 'bg-yellow-50/50' : ''}`}>
                <p className={`leading-relaxed mb-4 ${item.id === 6 ? 'text-neutral-800' : 'text-neutral-700'}`}>
                  {itemData.shortDesc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.id === 6 
                          ? 'bg-yellow-200 text-yellow-800' 
                          : 'bg-primary-100 text-primary-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-medium transition-all hover:scale-105 shadow-md hover:shadow-lg ${
                          item.id === 6 
                            ? 'bg-yellow-500 hover:bg-yellow-600' 
                            : 'bg-primary-500 hover:bg-primary-600'
                        }`}
                      >
                        <span>{link.icon}</span>
                        {itemData.links[link.key]}
                      </a>
                    ))}
                  </div>
                )}
                
                {/* Dropdown Details */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openDropdownId === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`mt-6 pt-6 border-t-2 space-y-4 ${
                    item.id === 6 ? 'border-yellow-200' : 'border-primary-100'
                  }`}>
                    <h4 className={`text-lg font-bold mb-4 ${
                      item.id === 6 ? 'text-yellow-800' : 'text-primary-700'
                    }`}>{t('portfolio.whatIDid')}</h4>
                    {item.detailsKeys.map((detailKey, detailIndex) => (
                      <div key={detailIndex} className={`flex items-start gap-3 p-4 rounded-2xl ${
                        item.id === 6 ? 'bg-yellow-100/70' : 'bg-primary-50'
                      }`}>
                        <span className="text-2xl">{item.detailsIcons[detailIndex]}</span>
                        <div>
                          <h5 className="font-bold text-neutral-900 mb-1">{itemData.details[detailKey].title}</h5>
                          <p className={`text-sm ${
                            item.id === 6 ? 'text-neutral-800' : 'text-neutral-700'
                          }`}>{itemData.details[detailKey].desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>
        
        {/* Portfolio-Ordner Kacheln */}
        <div className="mt-16" data-portfolio-folders>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('portfolio.folders.title')}
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('portfolio.folders.description')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div ref={portfolioFoldersRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPortfolioStructure().map((folder, index) => (
              <Link
                key={folder.slug}
                to={`/portfolio/${folder.slug}`}
                state={{ fromPortfolio: true }}
                onClick={() => {
                  // Prüfe ob wir auf Mobile sind
                  const isMobile = window.innerWidth < 768;
                  
                  // Auf Mobile: Keine Scroll-Position speichern, immer oben starten
                  if (isMobile) {
                    sessionStorage.removeItem('portfolioScrollPosition');
                    return;
                  }
                  
                  // Auf Desktop: Speichere Scroll-Position zu den Kacheln
                  const foldersSection = document.querySelector('[data-portfolio-folders]');
                  if (foldersSection) {
                    const scrollPosition = foldersSection.offsetTop - 100; // Etwas oberhalb für bessere Sicht
                    // Sicherheit: Validiere Scroll-Position vor dem Speichern
                    if (scrollPosition >= 0 && scrollPosition <= 100000) {
                      sessionStorage.setItem('portfolioScrollPosition', scrollPosition.toString());
                    }
                  }
                }}
                className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300 bg-white"
              >
                {/* Header mit Gradient */}
                <div className={`h-32 bg-gradient-to-br ${folder.color} relative overflow-hidden flex items-center justify-between px-6`}>
                  {/* Subtiles Muster */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl">{folder.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg line-clamp-2">
                        {folder.name}
                      </h3>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg 
                        className="w-5 h-5 text-white"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Content Preview */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                    <span>
                      {folder.files && folder.files.length > 0 && (
                        <>
                          {folder.files.length} {folder.files.length === 1 ? t('portfolio.folders.file') : t('portfolio.folders.files')}
                        </>
                      )}
                      {folder.subfolders && folder.subfolders.length > 0 && (
                        <>
                          {folder.subfolders.length} {folder.subfolders.length === 1 ? t('portfolio.folders.folder') : t('portfolio.folders.folders')}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    <span>{t('portfolio.folders.viewContent')}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Easter Egg: "Coming Soon" with plant */}
        <div className="mt-16 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-100 rounded-3xl p-12 text-center relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-40 h-40 text-primary-200 opacity-20 pointer-events-none">
            <OrganicShape variant="monsteraLeaf" className="w-full h-full" animate={true} />
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 text-accent-200 opacity-20 pointer-events-none">
            <OrganicShape variant="leaf" className="w-full h-full" animate={true} />
          </div>
          
          <div className="relative z-10">
            <span className="text-6xl mb-4 inline-block animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">{t('portfolio.comingSoon.title')}</h3>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              {t('portfolio.comingSoon.description')}
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-700 mb-6">
            {t('portfolio.cta.question')}
          </p>
          <a 
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'instant' });
              window.location.href = '/contact';
            }} 
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('portfolio.cta.button')}
          </a>
        </div>
    </article>
      
      {/* Easter Egg: Floating plant bottom right */}
      <div className="fixed bottom-8 right-8 w-20 h-20 text-primary-400 opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float z-50"
           title={t('portfolio.easterEggTooltip')}>
        <OrganicShape variant="monsteraLeaf" className="w-full h-full hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default Portfolio;
