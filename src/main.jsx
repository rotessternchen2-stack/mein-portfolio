import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App'

// Fehlerbehandlung für 404-Fehler nach langer Inaktivität
// Prüfe ob die Seite nach langer Inaktivität noch funktioniert
let lastActivity = Date.now();
let hasReloaded = false; // Verhindere mehrfaches Neuladen
const CHECK_INTERVAL = 10 * 60 * 1000; // Alle 10 Minuten prüfen
const INACTIVITY_THRESHOLD = 2 * 60 * 60 * 1000; // 2 Stunden Inaktivität

// Prüfe regelmäßig ob die Seite noch funktioniert
setInterval(() => {
  const now = Date.now();
  const timeSinceLastActivity = now - lastActivity;
  
  // Wenn mehr als 2 Stunden inaktiv UND noch nicht neu geladen
  if (timeSinceLastActivity > INACTIVITY_THRESHOLD && !hasReloaded) {
    // Versuche eine leichte Anfrage zu machen
    fetch('/', { 
      method: 'HEAD', 
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
      .then(response => {
        // Wenn 404, lade die Seite neu
        if (response.status === 404) {
          hasReloaded = true;
          window.location.href = '/';
        } else {
          // Seite funktioniert noch, setze lastActivity zurück
          lastActivity = Date.now();
        }
      })
      .catch(() => {
        // Bei Netzwerkfehler, versuche Seite neu zu laden
        if (!hasReloaded) {
          hasReloaded = true;
          window.location.reload();
        }
      });
  }
}, CHECK_INTERVAL);

// Aktualisiere lastActivity bei jeder Interaktion
['click', 'keydown', 'scroll', 'touchstart', 'mousemove'].forEach(event => {
  document.addEventListener(event, () => {
    lastActivity = Date.now();
    hasReloaded = false; // Reset nach Aktivität
  }, { passive: true });
});

// Prüfe beim Laden der Seite ob wir von einem 404 kommen
if (document.referrer && window.location.pathname !== '/') {
  // Wenn wir von einer anderen Seite kommen und nicht auf der Startseite sind
  // könnte es ein Problem geben
  const checkPageExists = async () => {
    try {
      const response = await fetch(window.location.href, { method: 'HEAD', cache: 'no-cache' });
      if (response.status === 404) {
        window.location.href = '/';
      }
    } catch (error) {
      // Bei Fehler, versuche zur Startseite zu navigieren
      window.location.href = '/';
    }
  };
  
  // Prüfe nach kurzer Verzögerung
  setTimeout(checkPageExists, 500);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
