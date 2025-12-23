import { useState } from "react";
import { useTranslation } from "@hooks/useTranslation";
import PlantOverlay from "@components/PlantOverlay";
import OrganicShape from "@components/OrganicShape";

const Portfolio = () => {
  const { t } = useTranslation();
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdownId(prevId => prevId === id ? null : id);
  };
  
  const portfolioItems = [
    {
      id: 1,
      title: "Check24",
      category: "Web Design & Frontend Development",
      description: "Duale Studentin im Bereich Mediendesign",
      shortDesc: "CD-konforme Web- und App-Designs, Logo-Entwicklung, Frontend mit React & Tailwind",
      tags: ["React", "Tailwind", "UI/UX", "Corporate Design"],
      color: "from-primary-400 to-primary-600",
      icon: "🌐",
      details: [
        {
          title: "Frontend-Entwicklung",
          desc: "Entwicklung von React-Komponenten mit Tailwind CSS für interne Tools",
          icon: "💻"
        },
        {
          title: "Corporate Design",
          desc: "Einhaltung und Umsetzung der CD-Guidelines auf Web & App",
          icon: "🎨"
        },
        {
          title: "Projektmanagement",
          desc: "Einblick in PM-Prozesse und Projektabläufe – von Planung bis Umsetzung",
          icon: "📋"
        },
        {
          title: "Logo & Medienentwicklung",
          desc: "Gestaltung von Logos und Print-/Webmedien für interne Nutzung",
          icon: "✨"
        }
      ]
    },
    {
      id: 2,
      title: "KulturLeben Leipzig & Region",
      category: "Social Media Management",
      description: "Content-Erstellung und Community Management",
      shortDesc: "Social Media Management, Content-Erstellung, Messestandbetreuung",
      tags: ["Social Media", "Content Creation", "Branding"],
      color: "from-accent-400 to-accent-600",
      icon: "📱",
      links: [
        {
          title: "Instagram",
          url: "https://www.instagram.com/kulturleben_leipzig/",
          icon: "📸"
        }
      ],
      details: [
        {
          title: "Social Media Management",
          desc: "Betreuung der Social-Media-Kanäle, Planung und Umsetzung von Content-Strategien",
          icon: "📱"
        },
        {
          title: "Content-Erstellung",
          desc: "Grafiken, Posts und Stories für Instagram und Facebook",
          icon: "✨"
        },
        {
          title: "Template-Erstellung",
          desc: "Erstellung von wiederverwendbaren Instagram-Templates für einheitliches Branding",
          icon: "🎨"
        },
        {
          title: "Messestandbetreuung",
          desc: "Repräsentation auf Messen und Events, Marketing-Material",
          icon: "🎪"
        }
      ]
    },
    {
      id: 3,
      title: "Leadfluss",
      category: "Grafikdesign & Social Media",
      description: "Praktikum im Bereich Kreativgestaltung",
      shortDesc: "Grafikdesign, Social Media Management, Content-Strategie",
      tags: ["Grafikdesign", "Social Media", "Marketing"],
      color: "from-primary-500 to-accent-500",
      icon: "🎨",
      links: [
        {
          title: "Website",
          url: "https://www.leadfluss.de/",
          icon: "🌐"
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/leadfluss.de/",
          icon: "📸"
        }
      ],
      details: [
        {
          title: "Grafikdesign",
          desc: "Erstellung von Grafiken, Flyern und Werbematerial mit Adobe Creative Suite",
          icon: "🎨"
        },
        {
          title: "Merch-Design",
          desc: "Konzeption und Gestaltung von Merchandise-Produkten für das Branding",
          icon: "👕"
        },
        {
          title: "Druckvorstufe mit InDesign",
          desc: "Professionelle Print-Projekte mit korrektem Anschnitt, Farbprofilen und druckfertigen Dateien",
          icon: "📄"
        },
        {
          title: "Social Media Management",
          desc: "Content-Planung und Umsetzung für verschiedene Kanäle",
          icon: "📱"
        },
        {
          title: "Kreative Kampagnen",
          desc: "Entwicklung und Umsetzung von Marketing-Kampagnen",
          icon: "💡"
        }
      ]
    },
    {
      id: 4,
      title: "Fürstenschnitt - Fürstenpfote",
      category: "Social Media & Grooming",
      description: "Hundefriseurin & Content Creator",
      shortDesc: "Hundefrisieren, Social Media Content, Video-Produktion",
      tags: ["Social Media", "Video", "Grooming"],
      color: "from-accent-500 to-primary-500",
      icon: "✂️",
      links: [
        {
          title: "Website Fürstenschnitt",
          url: "https://fuerstenschnitt.com/",
          icon: "🌐"
        },
        {
          title: "Instagram Fürstenpfote",
          url: "https://www.instagram.com/fuerstenpfote/",
          icon: "📸"
        }
      ],
      details: [
        {
          title: "Social Media Management",
          desc: "Content-Erstellung für Instagram, Reels und Stories",
          icon: "📱"
        },
        {
          title: "Hundefrisieren & Grooming",
          desc: "Professionelles Grooming für Hunde und Katzen",
          icon: "✂️"
        },
        {
          title: "Video-Produktion",
          desc: "Aufnahme und Schnitt von Videos für Social Media",
          icon: "🎥"
        }
      ]
    },
    {
      id: 5,
      title: "DoggyStyle Hundesalon",
      category: "Website-Entwicklung & Grooming",
      description: "Website-Entwicklung, Branding & Grooming",
      shortDesc: "Website-Entwicklung mit Wix, Ausbildung zur Hundefriseurin, Grooming",
      tags: ["Wix", "Web Design", "Branding", "Grooming"],
      color: "from-primary-400 to-accent-400",
      icon: "🌐",
      links: [
        {
          title: "Website besuchen",
          url: "https://www.hundesalondoggystylegrimma.com/",
          icon: "🌐"
        },
        {
          title: "Instagram Grimma",
          url: "https://www.instagram.com/doggystylegrimma/",
          icon: "📸"
        }
      ],
      details: [
        {
          title: "Website-Entwicklung",
          desc: "Komplette Website mit Wix erstellt - von Design bis Umsetzung",
          icon: "🌐"
        },
        {
          title: "Branding",
          desc: "Visuelle Identität und Design-Konzept",
          icon: "🎨"
        },
        {
          title: "Grooming-Ausbildung",
          desc: "Ausbildung zur Hundefriseurin und Grundlagen im professionellen Grooming",
          icon: "✂️"
        }
      ]
    },
    {
      id: 6,
      title: "Enten-Website 🦆",
      category: "Fun Project • Web Design",
      description: "Eine lustige Website über Enten – nicht zu ernst nehmen!",
      shortDesc: "Ein kreatives Side-Project aus reiner Enten-Liebe – mit spannenden Fakten und einer Prise Humor",
      tags: ["Fun Project", "Web Design", "Kreativität", "Easter Egg"],
      color: "from-yellow-400 to-orange-400",
      icon: "🦆",
      links: [
        {
          title: "Website besuchen",
          url: "https://enten-paradies.vercel.app/",
          icon: "🌐"
        }
      ],
      details: [
        {
          title: "Kreatives Side-Project",
          desc: "Aus purer Enten-Begeisterung entstanden – eine Website mit interessanten Fakten auf lustige Art und Weise",
          icon: "🦆"
        },
        {
          title: "Web Design & Entwicklung",
          desc: "Komplette Gestaltung und Umsetzung mit viel Liebe zum Detail",
          icon: "🎨"
        },
        {
          title: "Content & Humor",
          desc: "Unterhaltsamer Content, der Wissen mit Spaß verbindet – Enten sind schließlich fantastisch!",
          icon: "✨"
        }
      ]
    },
    {
      id: 7,
      title: "UI/UX & Prototyping",
      category: "Interface Design",
      description: "Benutzerfreundliche Interfaces",
      shortDesc: "Benutzerfreundliche Interfaces und Prototypen mit Figma",
      tags: ["Figma", "UX", "Prototyping"],
      color: "from-accent-400 to-primary-400",
      icon: "💡",
      details: [
        {
          title: "UI Design",
          desc: "Gestaltung moderner, nutzerfreundlicher Interfaces",
          icon: "🎨"
        },
        {
          title: "UX Research",
          desc: "Nutzerzentrierung und User Experience Optimierung",
          icon: "🔍"
        },
        {
          title: "Prototyping",
          desc: "Interaktive Prototypen und Wireframes mit Figma",
          icon: "⚡"
        }
      ]
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
            💼 Portfolio
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
          {portfolioItems.map((item, index) => (
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
                      {item.title}
                    </h3>
                    <span className="text-sm text-white/90 font-medium">
                      {item.category}
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
                  {item.shortDesc}
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
                        {link.title}
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
                    }`}>Was ich gemacht habe:</h4>
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className={`flex items-start gap-3 p-4 rounded-2xl ${
                        item.id === 6 ? 'bg-yellow-100/70' : 'bg-primary-50'
                      }`}>
                        <span className="text-2xl">{detail.icon}</span>
                        <div>
                          <h5 className="font-bold text-neutral-900 mb-1">{detail.title}</h5>
                          <p className={`text-sm ${
                            item.id === 6 ? 'text-neutral-800' : 'text-neutral-700'
                          }`}>{detail.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Weitere Projekte kommen bald!</h3>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Aktuell bin ich noch fleißig am Studium und arbeite an verschiedenen spannenden Projekten. 
              Aber keine Sorge – es wachsen hier bald mehr Arbeiten als Monstera-Blätter! 🌿
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-700 mb-6">
            Interesse an einer Zusammenarbeit?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Lass uns reden! 💬
          </a>
        </div>
      </article>
      
      {/* Easter Egg: Floating plant bottom right */}
      <div className="fixed bottom-8 right-8 w-20 h-20 text-primary-400 opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float z-50"
           title="🌿 Easter Egg: Jedes Projekt ist einzigartig!">
        <OrganicShape variant="monsteraLeaf" className="w-full h-full hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default Portfolio;
