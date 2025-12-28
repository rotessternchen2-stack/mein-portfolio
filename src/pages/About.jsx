import { useTranslation } from "@hooks/useTranslation";
import Timeline from "@components/Timeline";
import OrganicShape from "@components/OrganicShape";
import PlantOverlay from "@components/PlantOverlay";
import QRCode from "@components/QRCode";
import ExpandableText from "@components/ExpandableText";

const About = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      date: "Okt 2025 - Heute",
      title: "Hundefriseurin (nebenberuflich)",
      company: "Fürstenpfote - Fürstenschnitt",
      description: "Neben meinem Studium arbeite ich als Hundefriseurin und kümmere mich um professionelles Grooming für Hunde und Katzen. Dabei erstelle ich auch Video-Content für Social Media und setze kreative Fellgestaltungen um. Diese Nebentätigkeit hat mir wertvolle Skills vermittelt: Präzision im Detail, Geduld auch in stressigen Situationen und die Fähigkeit, auch mit den schwierigsten 'Kunden' umzugehen – Fähigkeiten, die mir auch im Design-Alltag sehr helfen!",
      icon: "✂️"
    },
    {
      date: "Okt 2022 - März 2026",
      title: "Duale Studentin Mediendesign",
      company: "Check24 & IU Internationale Hochschule",
      description: "Während meines dualen Studiums bei Check24 tauche ich tief in die Welt des digitalen Designs ein. Ich arbeite täglich mit React und Tailwind CSS, entwickle Frontend-Komponenten und achte dabei streng auf die Einhaltung der Corporate Design Guidelines. Zusätzlich gestalte ich Logos und entwickle Print- sowie Webmedien für die interne Nutzung. Das Studium vermittelt mir nicht nur technisches Know-how, sondern auch strategisches Denken und nutzerzentriertes Design. Abschluss: Bachelor of Arts in Mediendesign (März 2026).",
      icon: "🎓"
    },
    {
      date: "Okt 2023 - März 2025",
      title: "Social Media Management",
      company: "KulturLeben Leipzig & Region",
      description: "Verantwortlich für die Betreuung der Social-Media-Kanäle von KulturLeben Leipzig. Dabei entwickelte ich Content-Strategien, erstellte ansprechende Grafiken und Posts, betreute die Community und war auf Messen als Standbetreuer tätig. Durch diese Tätigkeit lernte ich, wie wichtig konsistente visuelle Kampagnen sind und wie man eine Marke authentisch und ansprechend auf Social Media präsentiert.",
      icon: "📱"
    },
    {
      date: "Juli 2023 - Okt 2025",
      title: "Praktikum Grafikdesign & Social Media",
      company: "Leadfluss",
      description: "In meinem Praktikum bei Leadfluss durfte ich sowohl im Grafikdesign als auch im Social Media Management arbeiten. Ich erstellte Grafiken, Flyer und Werbematerial mit der Adobe Creative Suite, entwickelte Social-Media-Strategien und setzte kreative Kampagnen um. Diese vielseitige Erfahrung hat mir gezeigt, wie wichtig es ist, Design und Marketing-Strategie zusammenzubringen.",
      icon: "🎨"
    },
    {
      date: "Feb 2025 - Sep 2025",
      title: "Ausbildung zur Hundefriseurin",
      company: "DoggyStyle Hundesalon",
      description: "Grundausbildung im professionellen Grooming von Hunden und Katzen. Neben der praktischen Arbeit habe ich auch die komplette Website des Salons mit Wix entwickelt und Video-Content für Social Media erstellt. Diese ungewöhnliche Kombination aus Grooming und Webdesign hat mir gezeigt, dass kreatives Arbeiten in vielen Bereichen möglich ist – und dass Präzision, Geduld und ein Auge fürs Detail überall wichtig sind.",
      icon: "🐕"
    },
    {
      date: "Juni 2022",
      title: "Abitur",
      company: "Werner-Heisenberg-Gymnasium",
      description: "Leistungskurse: Deutsch & Geschichte. Schwerpunkt in Kunst, wo ich bereits früh meine Leidenschaft für kreatives Gestalten entdeckt habe.",
      icon: "📚"
    }
  ];

  const skills = [
    { category: "Design", items: ["Adobe Creative Suite", "Figma", "Canva", "UX/UI Design", "Corporate Design"] },
    { category: "Development", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"] },
    { category: "Social Media", items: ["Content Creation", "Business Suite", "Instagram", "Video Editing"] },
    { category: "Tools & KI", items: ["Wix", "ChatGPT", "Cursor", "Adobe Firefly", "Git"] },
    { category: "Sprachen", items: ["Deutsch (C1)", "Englisch (B2)"] }
  ];

  const certificates = [
    "🔥 Brandschutzhelfer & Evakuierungshelfer",
    "🩹 Erste-Hilfe-Ausbildung",
    "💼 Business English Certificate (B1)",
  ];
  
  return (
    <div className="relative bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden">
      
      {/* Pflanzen-Overlays */}
      <PlantOverlay position="top-right" opacity={0.05} color="text-primary-300" />
      <PlantOverlay position="bottom-left" opacity={0.05} color="text-accent-300" />
      
      {/* Header Section */}
      <div className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full mb-6">
            🌿 Über mich
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            {t('pages.about.title')}
          </h1>
          <div className="max-w-3xl mx-auto">
            <ExpandableText maxLines={4}>
              <p className="text-xl text-neutral-700 leading-relaxed whitespace-pre-line">
                {t('pages.about.content').split('\n\n')[0]}
              </p>
            </ExpandableText>
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
                📋 Auf einen Blick
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Geburtsdatum */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🎂</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">Geburtsdatum</p>
                      <p className="text-lg font-bold text-neutral-900">01.05.2004</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📧</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">Email</p>
                      <a 
                        href="mailto:maria.wallberg04@gmail.com" 
                        className="text-sm font-bold text-primary-600 hover:text-primary-800 underline break-all"
                      >
                        maria.wallberg04@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Abschluss */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🎓</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">Abschluss</p>
                      <p className="text-lg font-bold text-neutral-900">B.A. Mediendesign</p>
                      <p className="text-sm text-neutral-600">März 2026</p>
                    </div>
                  </div>
                </div>

                {/* Standort */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📍</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">Standort</p>
                      <p className="text-lg font-bold text-neutral-900">Leipzig</p>
                      <p className="text-sm text-neutral-600">Deutschland</p>
                    </div>
                  </div>
                </div>

                {/* Key Skills */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">💼</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">Schwerpunkte</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed">
                        UX/UI Design<br/>
                        Social Media<br/>
                        Grafikdesign
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sprachen */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🌍</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">Sprachen</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed">
                        Deutsch (C1)<br/>
                        Englisch (B2)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🛠️</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">Haupttools</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed">
                        Figma, Adobe CC<br/>
                        ChatGPT, Cursor<br/>
                        Canva
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verfügbarkeit */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📅</span>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">Verfügbarkeit</p>
                      <p className="text-lg font-bold text-neutral-900">ab April 2026</p>
                    </div>
                  </div>
                </div>

                {/* Studiengang */}
                <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-accent-100">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📚</span>
                    <div>
                      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">Studiengang</p>
                      <p className="text-sm font-bold text-neutral-900 leading-relaxed">
                        Duales Studium<br/>
                        Mediendesign (B.A.)<br/>
                        IU & Check24
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
              ✨ Was mich ausmacht
            </h2>
            <p className="text-lg text-neutral-600">
              Mehr als nur Design – diese Leidenschaften prägen meine Arbeitsweise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pflanzen-Leidenschaft */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌿</div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Plant Mom</h3>
              <ExpandableText maxLines={4}>
                <p className="text-neutral-700 text-sm leading-relaxed break-words">
                  Von "Ich habe keinen grünen Daumen" zu einem kleinen Dschungel in der Wohnung. 
                  <span className="block mt-2 text-primary-600 font-medium break-words">
                    → Wie in der Natur wachse ich auch an Herausforderungen – mit Geduld und der richtigen Pflege entstehen die schönsten Projekte! 🌱
                  </span>
                </p>
              </ExpandableText>
            </div>

            {/* Backen */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 hover:border-accent-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍰</div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">Freestyle Bäckerin</h3>
              <ExpandableText maxLines={4}>
                <p className="text-neutral-700 text-sm leading-relaxed break-words">
                  Backen ohne Rezept (außer bei San Sebastián Cheesecake & Macarons – da bin ich dann doch lieber präzise). 
                  <span className="block mt-2 text-accent-600 font-medium break-words">
                    → Kreativität meets Präzision – genau wie im Design, wo ich weiß, wann ich experimentieren und wann ich mich an Guidelines halten muss! 🎯
                  </span>
                </p>
              </ExpandableText>
            </div>

            {/* Kochen */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍳</div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Experimentierfreudige Köchin</h3>
              <ExpandableText maxLines={4}>
                <p className="text-neutral-700 text-sm leading-relaxed break-words">
                  Kochen ohne Rezept und die perfekte Balance zwischen süß & herzhaft finden. 
                  <span className="block mt-2 text-primary-600 font-medium break-words">
                    → Wie beim UX-Design: Die richtige Balance von Elementen macht's – nicht zu viel, nicht zu wenig! ⚖️
                  </span>
                </p>
              </ExpandableText>
            </div>

            {/* Hunde */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 hover:border-accent-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🐕</div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">Hundeliebhaberin mit Leidenschaft</h3>
              <ExpandableText maxLines={4}>
                <p className="text-neutral-700 text-sm leading-relaxed break-words">
                  Vom Hundesitting zur Hundefriseur-Ausbildung – wenn ich etwas liebe, gehe ich all-in. 
                  <span className="block mt-2 text-accent-600 font-medium break-words">
                    → Detail-Arbeit, Geduld & mit schwierigen "Kunden" umgehen – Skills, die ich täglich in Projekten brauche! 💼
                  </span>
                </p>
              </ExpandableText>
            </div>

            {/* Tanzen */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💃</div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Tänzerin seit Tag 1</h3>
              <ExpandableText maxLines={4}>
                <p className="text-neutral-700 text-sm leading-relaxed break-words">
                  Seit ich 9 bin (mit 4 Jahren Pause) – jetzt wieder voll dabei mit Wettkämpfen & Auftritten. 
                  <span className="block mt-2 text-primary-600 font-medium break-words">
                    → Rhythmus, Timing & Performance unter Druck – wie bei Deadlines, nur mit mehr Choreografie! 🎭
                  </span>
                </p>
              </ExpandableText>
            </div>

            {/* Volleyball */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 hover:border-accent-400 hover:-translate-y-2 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏐</div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">Teamplayerin</h3>
              <ExpandableText maxLines={4}>
                <p className="text-neutral-700 text-sm leading-relaxed break-words">
                  Volleyball lehrt mich, dass Erfolg nur im Team funktioniert – jeder hat seine Rolle. 
                  <span className="block mt-2 text-accent-600 font-medium break-words">
                    → Im Design genauso: Designer, Developer, PMs – nur gemeinsam entstehen großartige Projekte! 🤝
                  </span>
                </p>
              </ExpandableText>
            </div>
          </div>

          {/* Fun Easter Egg */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 border-2 border-primary-300 shadow-md">
              <ExpandableText maxLines={2}>
                <p className="text-sm text-neutral-800 font-medium">
                  💡 <span className="italic">Design-Tipp:</span> Die besten Ideen entstehen außerhalb des Bildschirms – 
                  beim Backen, Tanzen oder mit meinen Pflanzen! 🌿✨
                </p>
              </ExpandableText>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">
              💼 Mein Werdegang
            </h2>
            <ExpandableText maxLines={2}>
              <p className="text-lg text-neutral-600">Von der Schule über's duale Studium bis... zu Hunden? 🐕</p>
            </ExpandableText>
          </div>
          <Timeline items={experiences} />
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">
              🛠️ Skills & Werkzeuge
            </h2>
            <ExpandableText maxLines={2}>
              <p className="text-lg text-neutral-600">Womit ich am liebsten arbeite</p>
            </ExpandableText>
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
              🏆 Zertifikate
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
                  label="Mein Portfolio ansehen! 📂"
                  size={250}
                />
                <p className="text-center text-sm text-neutral-600 mt-4">
                  Scanne den QR-Code und besuche mein Portfolio!
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
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Meine Design-Philosophie</h3>
            <ExpandableText maxLines={3}>
              <p className="text-lg text-neutral-700 leading-relaxed break-words">
                Gutes Design ist wie eine gut gepflegte Pflanze – es braucht Aufmerksamkeit, Geduld und die richtige Balance. 
                Jedes Projekt ist einzigartig und verdient eine maßgeschneiderte Lösung, die nicht nur schön aussieht, 
                sondern auch wirklich funktioniert und Mehrwert schafft. 🌿
              </p>
            </ExpandableText>
          </div>
        </div>
      </div>

      {/* Easter Egg: Hidden Monstera Leaf that wiggles on hover */}
      <div className="fixed bottom-8 right-8 w-16 h-16 text-primary-400 opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float z-50"
           title="🌿 Design wächst wie eine Pflanze – mit Geduld und Pflege!">
        <OrganicShape variant="monsteraLeaf" className="w-full h-full hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default About;
