import { useTranslation } from "@hooks/useTranslation";
import PlantOverlay from "@components/PlantOverlay";

const Datenschutz = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden">
      
      <PlantOverlay position="top-right" opacity={0.04} color="text-primary-300" />
      
      <div className="relative max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full mb-6">
            {t('legal.datenschutz.badge')}
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            {t('legal.datenschutz.title')}
          </h1>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border-2 border-primary-100">
          <div className="space-y-8 text-neutral-800">
            
            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.datenschutz.sections.overview.title')}</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.datenschutz.sections.overview.general.title')}</h3>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.overview.general.text')}
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.datenschutz.sections.overview.collection.title')}</h3>
              <p className="leading-relaxed mb-4">
                <strong>{t('legal.datenschutz.sections.overview.collection.question')}</strong><br />
                {t('legal.datenschutz.sections.overview.collection.answer')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.datenschutz.sections.hosting.title')}</h2>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.hosting.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.datenschutz.sections.general.title')}</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.datenschutz.sections.general.privacy.title')}</h3>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.general.privacy.text')}
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.datenschutz.sections.general.responsible.title')}</h3>
              <p className="leading-relaxed mb-4 whitespace-pre-line">
                {t('legal.datenschutz.sections.general.responsible.content')}
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                {t('legal.datenschutz.sections.general.responsible.note')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.datenschutz.sections.collection.title')}</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">{t('legal.datenschutz.sections.collection.contactForm.title')}</h3>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.collection.contactForm.text1')}
              </p>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.collection.contactForm.text2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.datenschutz.sections.rights.title')}</h2>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.rights.intro')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t('legal.datenschutz.sections.rights.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{t('legal.datenschutz.sections.externalLinks.title')}</h2>
              <p className="leading-relaxed mb-4">
                {t('legal.datenschutz.sections.externalLinks.text')}
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
            {t('legal.datenschutz.backButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;

