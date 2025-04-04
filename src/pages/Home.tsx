import mariaProfil from "../assets/mariaProfil.jpeg";


const Home = () => {
  const firstName = "Maria";
    return (
      <div className="mx-16">
        <div className="flex items-center ">
          <div className="colms w-1/3 ">
        <h1>Ich bin {firstName}, Designer & Kreativer Kopfs aus Leidenschaft.</h1>
        <p>Schön, dass du hier bist! Ich bin {firstName}, ein kreativer Designer, der es liebt, sowohl digitale als auch analoge Projekte zu gestalten. Egal ob Webseiten, Apps, Printmedien oder Crossmedia-Kampagnen – ich entwickle Lösungen, die nicht nur visuell überzeugen, sondern auch die Benutzererfahrung in den Mittelpunkt stellen.</p>
        </div>
        <img src={mariaProfil} alt="Maria" className="max-h-80 rounded-md items-end" />
        </div>
         <h1>Was ich tue</h1>
          <h3>Web- und App-Design (UX/UI)</h3>
          <p>Ich gestalte benutzerfreundliche Webseiten und Apps, die intuitiv, funktional und ästhetisch sind. Dabei setze ich auf eine durchdachte Benutzererfahrung und ein ansprechendes Interface-Design, das den Bedürfnissen der Nutzer gerecht wird.</p>
          <p></p>
          <h3>Printmedien</h3>
          <p>Von Visitenkarten bis zu großen Broschüren – ich entwerfe Printmaterialien, die deine Markenbotschaft klar und kreativ vermitteln.</p>
          <h3>Crossmedia-Kampagnen</h3>
          <p>Ich entwickle integrierte Kampagnen, die auf verschiedenen Kanälen (Web, Social Media, Print) eine konsistente Markenbotschaft vermitteln und deine Zielgruppe ansprechen.</p>
          <h3>Social Media Betreuung</h3>
          <p>Ich helfe dir, deine Social-Media-Präsenz auszubauen, indem ich kreative Inhalte entwickle und eine durchdachte Strategie umsetze, die deine Marke auf verschiedenen Plattformen stärkt.</p>
          <h3>Branding</h3>
          <p>Ich helfe dir die Einzigartigkeit deines Unternehmen herausstechen zu lassen.</p>
          <h3>Weitere kreative Kampagnen</h3>
          <p>Neben den klassischen Design-Dienstleistungen entwickle ich maßgeschneiderte kreative Kampagnen für dein Unternehmen – ob für Events, Werbemaßnahmen oder Content-Erstellung.“</p>
          <h1>Warum du mit mir arbeiten solltest</h1>
          <p>Ich bin nicht nur ein Designer – ich bin ein kreativer Kopf, der deine Vision in die Realität umsetzt. Wenn du nach einem Partner suchst, der sowohl digitales als auch analoges Design beherrscht, bist du bei mir genau richtig.</p>
          <h3>Kreativität</h3>
          <p>Ich entwickle kreative Lösungen, die auffallen und Wirkung erzielen.</p>
          <h3>Vielseitigkeit</h3>
          <p>Ich biete dir eine breite Palette an Design-Dienstleistungen – von Webseiten über Print bis hin zu Social Media.</p>
          <h3>Strategie</h3>
          <p>Ich arbeite mit dir zusammen, um maßgeschneiderte Kampagnen zu entwickeln, die deine Marke stärken und deine Ziele erreichen.</p>
          <h1>Lass uns sprechen!</h1>
          <p>Du hast eine Idee für ein Projekt oder eine Kampagne, die du realisieren möchtest? Ich freue mich darauf, mit dir zusammenzuarbeiten! Kontaktiere mich, und wir besprechen, wie ich deine Vision umsetzen kann.
          </p>
          <button>Jetzt Kontakt ausfnehmen</button>
      </div>
    );
  };
  
  export default Home;
  