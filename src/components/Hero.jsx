import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OrganicShape from './OrganicShape';
import PlantOverlay from './PlantOverlay';
import { useTranslation } from '@hooks/useTranslation';

const Hero = ({ imageSrc, imageAlt, title, subtitle }) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-accent-100">
      
      {/* Organische Hintergrund-Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 text-primary-200 opacity-30 -translate-y-1/4 translate-x-1/4">
          <OrganicShape variant="blob1" className="w-full h-full" animate={true} />
        </div>
        <div className="absolute bottom-0 left-0 w-80 h-80 text-accent-200 opacity-20 translate-y-1/4 -translate-x-1/4">
          <OrganicShape variant="blob2" className="w-full h-full" animate={true} />
        </div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 text-primary-300 opacity-15 -translate-x-1/2 -translate-y-1/2">
          <OrganicShape variant="blob3" className="w-full h-full" animate={true} />
        </div>
      </div>

      {/* Pflanzen-Overlays */}
      <PlantOverlay position="top-right" opacity={0.08} color="text-primary-300" />
      <PlantOverlay position="bottom-left" opacity={0.06} color="text-accent-300" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full">
                🌿 Portfolio {new Date().getFullYear()}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 leading-tight">
              {title}
            </h1>
            
            <h2 className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              {subtitle}
            </h2>
            
            <div className="pt-4 flex gap-4 flex-wrap">
              <Link 
                to="/portfolio" 
                className="group relative px-8 py-4 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('hero.buttons.portfolio')}
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary-200"
              >
                {t('hero.buttons.contact')}
              </Link>
            </div>
          </div>
          
          {/* Image Content - mit organischer Form */}
          <div className="relative order-1 md:order-2">
            <div className="relative">
              {/* Organischer Rahmen/Background */}
              <div className="absolute inset-0 text-primary-400 opacity-20 scale-110">
                <OrganicShape variant="blob1" className="w-full h-full" animate={true} />
              </div>
              
              {/* Bild mit organischem Clip-Path */}
              <div className="relative overflow-hidden rounded-organic shadow-2xl">
                <div className="aspect-square">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className="w-full h-full object-cover scale-125 hover:scale-130 transition-transform duration-700"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}
                  />
                </div>
              </div>
              
              {/* Easter Egg - kleines animiertes Blatt */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 text-accent-500 opacity-80 animate-float cursor-pointer hover:scale-110 transition-transform"
                   title="🌿 Psst... ich liebe Pflanzen!">
                <OrganicShape variant="leaf" className="w-full h-full" animate={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wellenförmiger Übergang nach unten */}
      <div className="absolute bottom-0 left-0 w-full text-white transform translate-y-1">
        <OrganicShape variant="waveBottom" className="w-full h-24" animate={false} />
      </div>
    </div>
  );
};

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Hero;

