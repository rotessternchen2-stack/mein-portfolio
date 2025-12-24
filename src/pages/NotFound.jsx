import { Link } from 'react-router-dom';
import { useTranslation } from '@hooks/useTranslation';
import OrganicShape from '@components/OrganicShape';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-primary-50 to-accent-50 flex items-center justify-center overflow-hidden">
      {/* Organische Hintergrund-Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 text-primary-200 opacity-15 pointer-events-none">
        <OrganicShape variant="blob1" className="w-full h-full" animate={true} />
      </div>
      <div className="absolute bottom-20 right-10 w-48 h-48 text-accent-200 opacity-15 pointer-events-none">
        <OrganicShape variant="blob2" className="w-full h-full" animate={true} />
      </div>

      <div className="relative z-10 text-center px-8 max-w-2xl">
        {/* 404 mit organischem Hintergrund */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 w-full h-full text-primary-300 opacity-20 blur-2xl">
            <OrganicShape variant="blob3" className="w-full h-full" />
          </div>
          <h1 className="relative text-9xl font-display font-bold text-primary-600 animate-float">
            404
          </h1>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Oops! Diese Seite gibt es nicht 🌿
        </h2>
        
        <p className="text-xl text-neutral-700 mb-8 max-w-lg mx-auto">
          Es scheint, als hättest du dich in meinem Portfolio verlaufen. 
          Aber keine Sorge – wie bei Monstera-Pflanzen wachsen hier ständig neue Wege!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            🏠 Zurück zur Startseite
          </Link>
          
          <Link 
            to="/portfolio"
            className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary-300"
          >
            💼 Zum Portfolio
          </Link>
        </div>

        {/* Easter Egg */}
        <div className="mt-12 text-sm text-neutral-600 italic">
          <p>💡 Fun Fact: Selbst ein 404-Fehler kann schön aussehen!</p>
        </div>
      </div>

      {/* Floating plant decoration */}
      <div className="absolute bottom-8 left-8 w-20 h-20 text-primary-400 opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float-slow"
           title="🌿 Easter Egg: Auch Fehlerseiten verdienen Design!">
        <OrganicShape variant="monsteraLeaf" className="w-full h-full hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default NotFound;



