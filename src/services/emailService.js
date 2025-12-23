import emailjs from '@emailjs/browser';

// ⚠️ WICHTIG: Füge deinen Public Key in die .env Datei ein!
// Siehe: EMAILJS_SETUP.md für die Anleitung
const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hbgirka',
  ADMIN_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE || 'template_14zub5o',
  CONFIRMATION_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE || 'template_3n1vomi',
  ADMIN_EMAIL: 'maria.wallberg04@gmail.com'
};

// EmailJS initialisieren
let isInitialized = false;

const initializeEmailJS = () => {
  if (!isInitialized) {
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('⚠️ EmailJS nicht konfiguriert! Siehe .env.example');
    } else {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      isInitialized = true;
      console.log('✅ EmailJS initialisiert');
    }
  }
};

/**
 * Sendet Kontaktformular-Nachricht
 * @param {Object} contactData - Kontakt-Daten
 * @param {string} contactData.name - Name des Absenders
 * @param {string} contactData.email - Email des Absenders
 * @param {string} contactData.subject - Betreff der Anfrage
 * @param {string} contactData.message - Nachricht/Anliegen
 * @returns {Promise} Promise mit Erfolg/Fehler
 */
export const sendContactMessage = async (contactData) => {
  initializeEmailJS();

  if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    throw new Error('EmailJS nicht konfiguriert. Bitte Public Key in .env eintragen!');
  }

  const timestamp = new Date().toLocaleString('de-DE', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // Spam-Vermeidung: Reply-To korrekt setzen
  const templateParams = {
    // Für Admin-Email (Maria)
    from_name: contactData.name,
    from_email: contactData.email,
    subject: contactData.subject, // Betreff separat
    message: contactData.message,
    timestamp: timestamp,
    to_email: EMAILJS_CONFIG.ADMIN_EMAIL,
    reply_to: contactData.email, // Wichtig für Anti-Spam!
    
    // Für Bestätigungs-Email (User)
    to_name: contactData.name,
    to_email: contactData.email
  };

  try {
    // 1. Sende Benachrichtigung an Admin (Maria) mit der Anfrage
    const adminResponse = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
      {
        from_name: templateParams.from_name,
        from_email: templateParams.from_email,
        subject: templateParams.subject,
        message: templateParams.message,
        timestamp: templateParams.timestamp,
        reply_to: templateParams.reply_to
        // to_email wird NICHT als Parameter gesendet - steht direkt im Template!
      }
    );

    console.log('✅ Admin-Benachrichtigung gesendet:', adminResponse);

    // 2. Sende Bestätigungs-Email an User
    const confirmationResponse = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONFIRMATION_TEMPLATE_ID,
      {
        to_name: templateParams.to_name,
        to_email: templateParams.to_email,
        subject: templateParams.subject, // Betreff auch für User-Email
        from_name: 'Maria Wallberg',
        reply_to: EMAILJS_CONFIG.ADMIN_EMAIL
      }
    );

    console.log('✅ Bestätigungs-Email gesendet:', confirmationResponse);

    return {
      success: true,
      message: 'Nachricht erfolgreich versendet!'
    };

  } catch (error) {
    console.error('❌ EmailJS Fehler:', error);
    
    // Detaillierte Fehler-Messages
    let errorMessage = 'Fehler beim Versenden der Email.';
    
    if (error.text) {
      errorMessage = `EmailJS Fehler: ${error.text}`;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    throw new Error(errorMessage);
  }
};

export default {
  sendContactMessage
};

