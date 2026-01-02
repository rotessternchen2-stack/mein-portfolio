import { useTranslation } from "@hooks/useTranslation";
import Timeline from "@components/Timeline";
import OrganicShape from "@components/OrganicShape";
import PlantOverlay from "@components/PlantOverlay";
import QRCode from "@components/QRCode";

const About = () => {
  const { t, language } = useTranslation();
  
  // Lade Timeline, Skills und Zertifikate aus Übersetzungen
  const timelineData = t('pages.about.timeline.items', { returnObjects: true });
  const skillsData = t('pages.about.skills.categories', { returnObjects: true });
  const certificatesData = t('pages.about.certificates.items', { returnObjects: true });
  
  // Sicherstellen, dass es Arrays sind
  const experiences = Array.isArray(timelineData) ? timelineData : [];
  const skills = Array.isArray(skillsData) ? skillsData : [];
  const certificates = Array.isArray(certificatesData) ? certificatesData : [];
  
  return (
    <div className="relative bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden">
      
      {/* Pflanzen-Overlays */}
      <PlantOverlay position="top-right" opacity={0.05} color="text-primary-300" />
      <PlantOverlay position="bottom-left" opacity={0.05} color="text-accent-300" />
      
      {/* Header Section */}
      <div className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full mb-6">
            {t('pages.about.badge')}
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            {t('pages.about.title')}
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-neutral-700 leading-relaxed whitespace-pre-line">
              {t('pages.about.content').split('\n\n')[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Hardfacts Section */}
      <div className="relative py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white via-primary-50 to-accent-50 rounded-3xl p-8 shadow-xl border-2 border-primary-200 relative overflow-hidden">
            {/* Organischer Hintergrund */}
            <div className="absolute -top-16 -right-16 w-64 h-64 text-primary-100 opacity-30 pointer-events-none">
              <OrganicShape variant="blob1" className="w-full h-full" animate={false} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8 text-center">
                {t('pages.about.hardfacts.sectionTitle')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Geburtsdatum */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🎂</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.birthDate.label')}</p>
                      <p className="text-lg font-bold text-neutral-900">{t('pages.about.hardfacts.birthDate.value')}</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📧</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.email.label')}</p>
                      <a 
                        href={`mailto:${t('pages.about.hardfacts.email.value')}`}
                        className="text-sm font-bold text-primary-600 hover:text-primary-800 underline break-all"
                      >
                        {t('pages.about.hardfacts.email.value')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Abschluss */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🎓</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.degree.label')}</p>
                      <p className="text-lg font-bold text-neutral-900">{t('pages.about.hardfacts.degree.value')}</p>
                      <p className="text-sm text-neutral-600">{t('pages.about.hardfacts.degree.date')}</p>
                    </div>
                  </div>
                </div>

                {/* Standort */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📍</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.location.label')}</p>
                      <p className="text-lg font-bold text-neutral-900">{t('pages.about.hardfacts.location.city')}</p>
                      <p className="text-sm text-neutral-600">{t('pages.about.hardfacts.location.country')}</p>
                    </div>
                  </div>
                </div>

                {/* Key Skills */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">💼</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.keySkills.label')}</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed whitespace-pre-line">
                        {t('pages.about.hardfacts.keySkills.skills')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sprachen */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🌍</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.languages.label')}</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed whitespace-pre-line">
                        {t('pages.about.hardfacts.languages.items')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🛠️</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.tools.label')}</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed whitespace-pre-line">
                        {t('pages.about.hardfacts.tools.items')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verfügbarkeit */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📅</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.availability.label')}</p>
                      <p className="text-lg font-bold text-neutral-900">{t('pages.about.hardfacts.availability.value')}</p>
                    </div>
                  </div>
                </div>

                {/* Studiengang */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📚</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">{t('pages.about.hardfacts.studies.label')}</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed">
                        {t('pages.about.hardfacts.studies.line1')}<br/>
                        {t('pages.about.hardfacts.studies.line2')}<br/>
                        {t('pages.about.hardfacts.studies.line3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="relative py-16 px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('pages.about.funFacts.sectionTitle')}
            </h2>
            <p className="text-lg text-neutral-600">
              {t('pages.about.funFacts.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pflanzen-Leidenschaft */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌿</div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">{t('pages.about.funFacts.plantMom.title')}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t('pages.about.funFacts.plantMom.description')}
                <span className="block mt-2 text-primary-600 font-medium">
                  {t('pages.about.funFacts.plantMom.insight')}
                </span>
              </p>
            </div>

            {/* Backen */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 hover:border-accent-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍰</div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">{t('pages.about.funFacts.baking.title')}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t('pages.about.funFacts.baking.description')}
                <span className="block mt-2 text-accent-600 font-medium">
                  {t('pages.about.funFacts.baking.insight')}
                </span>
              </p>
            </div>

            {/* Kochen */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍳</div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">{t('pages.about.funFacts.cooking.title')}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t('pages.about.funFacts.cooking.description')}
                <span className="block mt-2 text-primary-600 font-medium">
                  {t('pages.about.funFacts.cooking.insight')}
                </span>
              </p>
            </div>

            {/* Hunde */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 hover:border-accent-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🐕</div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">{t('pages.about.funFacts.dogs.title')}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t('pages.about.funFacts.dogs.description')}
                <span className="block mt-2 text-accent-600 font-medium">
                  {t('pages.about.funFacts.dogs.insight')}
                </span>
              </p>
            </div>

            {/* Tanzen */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💃</div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">{t('pages.about.funFacts.dancing.title')}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t('pages.about.funFacts.dancing.description')}
                <span className="block mt-2 text-primary-600 font-medium">
                  {t('pages.about.funFacts.dancing.insight')}
                </span>
              </p>
            </div>

            {/* Volleyball */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 hover:border-accent-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏐</div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">{t('pages.about.funFacts.volleyball.title')}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {t('pages.about.funFacts.volleyball.description')}
                <span className="block mt-2 text-accent-600 font-medium">
                  {t('pages.about.funFacts.volleyball.insight')}
                </span>
              </p>
            </div>
          </div>

          {/* Fun Easter Egg */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 border-2 border-primary-300 shadow-md">
              <p className="text-sm text-neutral-800 font-medium">
                {t('pages.about.funFacts.easterEgg')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('pages.about.timeline.sectionTitle')}
            </h2>
            <p className="text-lg text-neutral-600">{t('pages.about.timeline.subtitle')}</p>
          </div>
          <Timeline items={experiences} />
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('pages.about.skills.sectionTitle')}
            </h2>
            <p className="text-lg text-neutral-600">{t('pages.about.skills.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-primary-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-neutral-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="relative py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('pages.about.certificates.sectionTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Certificates */}
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <p className="text-neutral-700 text-lg">{cert}</p>
                </div>
              ))}
            </div>
            
            {/* QR Code */}
            <div className="flex justify-center">
              <div className="max-w-sm">
                <QRCode 
                  url="https://drive.google.com/drive/folders/1cnsPty7Rz-KawxuHKbnZ0qMEEKs0HVZj?usp=sharing" 
                  label={t('pages.about.certificates.qrCodeLabel')}
                  size={250}
                />
                <p className="text-center text-sm text-neutral-600 mt-4">
                  {t('pages.about.certificates.qrCodeDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Philosophy Section */}
      <div className="relative py-16 px-8 bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border-2 border-primary-200">
            <span className="text-6xl mb-4 inline-block">✨</span>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t('pages.about.philosophy.sectionTitle')}</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t('pages.about.philosophy.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Easter Egg: Hidden Monstera Leaf that wiggles on hover */}
      <div className="fixed bottom-8 right-8 w-16 h-16 text-primary-400 opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float z-50"
           title={t('pages.about.easterEggTooltip')}>
        <OrganicShape variant="monsteraLeaf" className="w-full h-full hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default About;
