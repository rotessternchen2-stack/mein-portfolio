import { useTranslation } from "@hooks/useTranslation";
import OrganicShape from "@components/OrganicShape";
import PlantOverlay from "@components/PlantOverlay";

const Impressum = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden">
      
      <PlantOverlay position="top-right" opacity={0.04} color="text-primary-300" />
      
      <div className="relative max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full mb-6">
            {t('legal.impressum.badge')}
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            {t('legal.impressum.title')}
          </h1>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border-2 border-primary-100">
          <div className="space-y-8 text-neutral-800">
            
            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.impressum.sections.tmg.title')}</h2>
              <p className="leading-relaxed whitespace-pre-line">
                {t('legal.impressum.sections.tmg.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.impressum.sections.contact.title')}</h2>
              <p className="leading-relaxed">
                {t('legal.impressum.sections.contact.email')}
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                {t('legal.impressum.sections.contact.note')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.impressum.sections.responsible.title')}</h2>
              <p className="leading-relaxed">
                {t('legal.impressum.sections.responsible.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.impressum.sections.liability.title')}</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.impressum.sections.liability.content.title')}</h3>
              <p className="leading-relaxed mb-4">
                {t('legal.impressum.sections.liability.content.text')}
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.impressum.sections.liability.links.title')}</h3>
              <p className="leading-relaxed mb-4">
                {t('legal.impressum.sections.liability.links.text')}
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.impressum.sections.liability.copyright.title')}</h3>
              <p className="leading-relaxed">
                {t('legal.impressum.sections.liability.copyright.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.impressum.sections.dispute.title')}</h2>
              <p className="leading-relaxed">
                {t('legal.impressum.sections.dispute.text')}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" 
                   className="text-primary-600 hover:text-primary-700 underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

          </div>
        </div>

        {/* Zurück-Button */}
        <div className="text-center mt-12">
          <a 
            href="/" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('legal.impressum.backButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Impressum;

