import { useTranslation } from "@hooks/useTranslation";
import { Link } from "react-router-dom";
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
            📄 Rechtliches
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            Impressum
          </h1>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border-2 border-primary-100">
          <div className="space-y-8 text-neutral-800">
            
            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="leading-relaxed break-words">
                Maria Wallberg<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Kontakt</h2>
              <p className="leading-relaxed break-words">
                E-Mail: maria.wallberg04@gmail.com
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                Für weitere Kontaktmöglichkeiten nutze gerne das Kontaktformular auf dieser Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Verantwortlich für den Inhalt</h2>
              <p className="leading-relaxed">
                Maria Wallberg
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Haftung für Inhalte</h3>
              <p className="leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Haftung für Links</h3>
              <p className="leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Urheberrecht</h3>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">EU-Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" 
                   className="text-primary-600 hover:text-primary-700 underline ml-1 break-all">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

          </div>
        </div>

        {/* Zurück-Button */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impressum;

