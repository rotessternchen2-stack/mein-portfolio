import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import mariaHero from "@assets/maria-hero.png";
import { useTranslation } from "@hooks/useTranslation";
import Hero from "@components/Hero";
import Section from "@components/Section";
import ServiceItem from "@components/ServiceItem";
import PrimaryButton from "@components/PrimaryButton";
import PlantOverlay from "@components/PlantOverlay";
import OrganicShape from "@components/OrganicShape";

// Komponente für "Mehr lesen" Funktionalität (nur Mobile)
const ExpandableText = ({ text, maxLength = 150, className = "text-neutral-700 leading-relaxed" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Auf Desktop immer vollständigen Text zeigen
  if (!isMobile || !text || text.length <= maxLength) {
    return <p className={className}>{text}</p>;
  }
  
  // Auf Mobile: Truncation mit "Mehr anzeigen"
  const truncatedText = text.substring(0, maxLength);
  const shouldTruncate = text.length > maxLength;
  
  return (
    <div>
      <p className={className}>
        {isExpanded ? text : truncatedText}
        {shouldTruncate && !isExpanded && '...'}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors md:hidden"
        >
          {isExpanded ? t('common.showLess') : t('common.showMore')}
        </button>
      )}
    </div>
  );
};

ExpandableText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  className: PropTypes.string
};

const Home = () => {
  const { t } = useTranslation();
  
  const services = [
    { key: 'webDesign', title: t('home.whatIDo.webDesign.title'), description: t('home.whatIDo.webDesign.description') },
    { key: 'print', title: t('home.whatIDo.print.title'), description: t('home.whatIDo.print.description') },
    { key: 'crossmedia', title: t('home.whatIDo.crossmedia.title'), description: t('home.whatIDo.crossmedia.description') },
    { key: 'socialMedia', title: t('home.whatIDo.socialMedia.title'), description: t('home.whatIDo.socialMedia.description') },
    { key: 'branding', title: t('home.whatIDo.branding.title'), description: t('home.whatIDo.branding.description') },
    { key: 'creative', title: t('home.whatIDo.creative.title'), description: t('home.whatIDo.creative.description') }
  ];

  const strengths = [
    { key: 'creativity', title: t('home.whyMe.creativity.title'), description: t('home.whyMe.creativity.description') },
    { key: 'versatility', title: t('home.whyMe.versatility.title'), description: t('home.whyMe.versatility.description') },
    { key: 'strategy', title: t('home.whyMe.strategy.title'), description: t('home.whyMe.strategy.description') }
  ];

  return (
    <>
      <Hero
        imageSrc={mariaHero}
        imageAlt={t('a11y.profileImageAlt')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />
      
      <div className="relative bg-white overflow-hidden">
        {/* Pflanzen-Overlays */}
        <PlantOverlay position="top-right" opacity={0.04} color="text-primary-300" />
        <PlantOverlay position="bottom-left" opacity={0.04} color="text-accent-300" />
        
        <div className="mx-8 md:mx-16 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-32 h-32 text-primary-200 opacity-30 pointer-events-none">
              <OrganicShape variant="leaf" className="w-full h-full" animate={true} />
            </div>
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-[3rem] p-10 shadow-lg border-2 border-primary-100 mb-16 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 text-accent-100 opacity-50 pointer-events-none">
                <OrganicShape variant="blob3" className="w-full h-full" animate={true} />
              </div>
              <ExpandableText text={t('home.intro')} maxLength={200} className="text-xl leading-relaxed text-neutral-800 relative z-10" />
            </div>
          </div>
          
          {/* Was ich mache */}
          <div className="relative mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
                {t('home.whatIDo.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={service.key} 
                     className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 hover:-translate-y-2 group"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-4 text-4xl">
                    {['🌐', '🖨️', '📱', '📱', '🎨', '💡'][index]}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <ExpandableText text={service.description} maxLength={120} />
                </div>
            ))}
            </div>
          </div>
          
          {/* Warum ich */}
          <div className="relative mb-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-[3rem] p-12 shadow-lg">
            <div className="absolute top-10 right-10 w-32 h-32 text-primary-200 opacity-20 pointer-events-none">
              <OrganicShape variant="monsteraLeaf" className="w-full h-full" animate={true} />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
                  {t('home.whyMe.title')}
                </h2>
                <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
                  {t('home.whyMe.intro')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
            {strengths.map((strength) => (
                  <div key={strength.key} 
                       className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400">
                    <h3 className="text-2xl font-bold text-primary-700 mb-3 break-words">
                      {strength.title}
                    </h3>
                    <ExpandableText text={strength.description} maxLength={150} />
                  </div>
            ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="relative text-center py-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 rounded-[3rem] opacity-50"></div>
            <div className="relative z-10 p-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 break-words whitespace-pre-line">
                {t('home.cta.title')}
              </h2>
              <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
                {t('home.cta.description')}
              </p>
            <Link 
              to="/contact"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            >
              <PrimaryButton label={t('home.cta.button')} />
            </Link>
            </div>
          </div>
          
          {/* Easter Egg: Hidden plant facts */}
          <div className="mt-12 text-center">
            <details className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-[2rem] p-6 cursor-pointer hover:shadow-lg transition-all">
              <summary className="text-primary-700 font-bold text-lg cursor-pointer">
                {t('home.easterEgg.title')}
              </summary>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                {t('home.easterEgg.description')}
              </p>
            </details>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
