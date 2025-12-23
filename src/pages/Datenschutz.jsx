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
            🔒 Datenschutz
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-lg border-2 border-primary-100">
          <div className="space-y-8 text-neutral-800">
            
            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="leading-relaxed mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">2. Hosting</h2>
              <p className="leading-relaxed mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Datenschutz</h3>
              <p className="leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Maria Wallberg<br />
                Deutschland<br /><br />
                E-Mail: maria.wallberg04@gmail.com
              </p>
              <p className="text-sm text-neutral-600 mt-3">
                Für weitere Kontaktmöglichkeiten nutzen Sie bitte das Kontaktformular auf dieser Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Kontaktformular</h3>
              <p className="leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht 
                ohne Ihre Einwilligung weiter.
              </p>
              <p className="leading-relaxed mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
                Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem 
                berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen 
                (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">5. Ihre Rechte</h2>
              <p className="leading-relaxed mb-4">
                Sie haben das Recht:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
                <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">6. Externe Links</h2>
              <p className="leading-relaxed mb-4">
                Diese Website enthält Links zu externen Websites (z.B. LinkedIn, Instagram). Sobald Sie auf einen 
                externen Link klicken, gelten die Datenschutzbestimmungen der jeweiligen Plattform. Wir haben 
                keinen Einfluss auf die Datenverarbeitung durch diese externen Anbieter.
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
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;

