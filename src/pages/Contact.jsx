import { useState } from "react";
import { useTranslation } from "@hooks/useTranslation";
import InputField from "@components/InputField";
import PrimaryButton from "@components/PrimaryButton";
import PlantOverlay from "@components/PlantOverlay";
import OrganicShape from "@components/OrganicShape";
import { sendContactMessage } from "@/services/emailService";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitCount, setSubmitCount] = useState(0); // Rate limiting
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Input Sanitization - XSS Protection
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, ''); // Remove event handlers like onclick=
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.name.error') || 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.email.errorRequired') || 'E-Mail ist erforderlich';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.email.errorInvalid') || 'Ungültige E-Mail-Adresse';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.subject.error') || 'Betreff ist erforderlich';
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.message.error') || 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.message.errorShort') || 'Nachricht muss mindestens 10 Zeichen lang sein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Fehler für dieses Feld entfernen, wenn der Benutzer tippt
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validierung
    if (!validateForm()) {
      return;
    }

    // Rate Limiting - max 3 Submissions in 5 Minuten
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    
    if (now - lastSubmitTime < fiveMinutes) {
      if (submitCount >= 3) {
        setErrors({
          ...errors,
          submit: 'Zu viele Anfragen. Bitte warten Sie 5 Minuten.'
        });
        return;
      }
    } else {
      setSubmitCount(0); // Reset counter nach 5 Minuten
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      // Input Sanitization vor dem Senden
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject), // Betreff separat
        message: sanitizeInput(formData.message)
      };

      // EmailJS verwenden
      await sendContactMessage({
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject, // Betreff mitgeben!
        message: sanitizedData.message
      });

      setSubmitStatus('success');
      setSubmitCount(prev => prev + 1);
      setLastSubmitTime(now);
      
      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Success-Message nach 5 Sekunden ausblenden
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Fehler beim Senden:', error);
      
      // Detaillierte Error-Messages
      let errorMessage = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
      
      if (error.message.includes('nicht konfiguriert')) {
        errorMessage = 'Formular nicht konfiguriert. Bitte Public Key in .env eintragen!';
      } else if (!navigator.onLine) {
        errorMessage = 'Keine Internetverbindung. Bitte überprüfen Sie Ihre Verbindung.';
      } else {
        errorMessage = error.message || errorMessage;
      }
      
      setSubmitStatus('error');
      setErrors({ submit: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-primary-50 to-accent-50 overflow-hidden">
      
      {/* Pflanzen-Overlays */}
      <PlantOverlay position="top-left" opacity={0.06} color="text-primary-300" />
      <PlantOverlay position="bottom-right" opacity={0.06} color="text-accent-300" />
      
      {/* Organische Hintergrund-Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 text-primary-200 opacity-20 pointer-events-none">
        <OrganicShape variant="blob2" className="w-full h-full" animate={true} />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full mb-6">
            💬 Kontakt
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">{t('contact.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Why Contact Me Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-primary-100 hover:border-primary-300 transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <span>💼</span> Warum mit mir arbeiten?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-2xl">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <p className="text-sm font-bold text-primary-700 mb-1">Kreativ & Strategisch</p>
                    <p className="text-sm text-neutral-700">
                      Ich verbinde kreatives Design mit strategischem Denken für Lösungen, die funktionieren.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-2xl">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-sm font-bold text-primary-700 mb-1">Vielseitig</p>
                    <p className="text-sm text-neutral-700">
                      Von UX/UI über Frontend bis Social Media – ich decke verschiedene Bereiche ab.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-2xl">
                  <span className="text-2xl">💡</span>
                  <div>
                    <p className="text-sm font-bold text-primary-700 mb-1">Nutzerorientiert</p>
                    <p className="text-sm text-neutral-700">
                      Der User steht im Mittelpunkt – schönes Design, das auch funktioniert.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-2xl">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-sm font-bold text-accent-700 mb-1">Schnelle Antwort</p>
                    <p className="text-sm text-neutral-700">
                      Ich melde mich schnell zurück – versprochen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fun Fact */}
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-6 shadow-md border-2 border-primary-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl animate-float">✂️</span>
                <div>
                  <p className="text-sm font-bold text-primary-700 mb-2">💡 Fun Fact:</p>
                  <p className="text-sm text-neutral-700">
                    Als Hundefriseurin habe ich gelernt: Geduld, Präzision und ein Auge fürs Detail sind 
                    das A und O – genau wie im Design! Nur dass Stakeholder nicht ganz so kuschelig sind. 😄
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary-100 relative overflow-hidden">
            {/* Organischer Hintergrund */}
            <div className="absolute -top-10 -right-10 w-40 h-40 text-primary-100 opacity-50 pointer-events-none">
              <OrganicShape variant="blob3" className="w-full h-full" animate={false} />
            </div>
            
            <div className="relative z-10">
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            <InputField
              id="name"
              name="name"
              type="text"
              label={t('contact.form.name.label') || 'Name'}
              placeholder={t('contact.form.name.placeholder')}
              value={formData.name}
              onChange={handleChange('name')}
              error={errors.name}
              required
            />
            
            <InputField
              id="email"
              name="email"
              type="email"
              label={t('contact.form.email.label') || 'E-Mail'}
              placeholder={t('contact.form.email.placeholder')}
              value={formData.email}
              onChange={handleChange('email')}
              error={errors.email}
              required
            />
            
            <InputField
              id="subject"
              name="subject"
              type="text"
              label={t('contact.form.subject.label') || 'Betreff'}
              placeholder={t('contact.form.subject.placeholder')}
              value={formData.subject}
              onChange={handleChange('subject')}
              error={errors.subject}
              required
            />
            
            <InputField
              id="message"
              name="message"
              type="textarea"
              label={t('contact.form.message.label') || 'Nachricht'}
              placeholder={t('contact.form.message.placeholder')}
              value={formData.message}
              onChange={handleChange('message')}
              error={errors.message}
              required
              rows={6}
            />
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg" role="alert">
                {t('contact.form.successMessage') || 'Ihre Nachricht wurde erfolgreich gesendet!'}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
                {errors.submit || t('contact.form.errorMessage') || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'}
              </div>
            )}
            
            {errors.submit && submitStatus !== 'error' && (
              <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg" role="alert">
                {errors.submit}
              </div>
            )}
            
            <div className="pt-4">
              <PrimaryButton
                type="submit"
                label={isSubmitting 
                  ? (t('contact.form.submitting') || 'Wird gesendet...') 
                  : t('contact.form.submit')
                }
                disabled={isSubmitting}
                fullWidth
              />
            </div>
          </div>
        </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Easter Egg: Floating leaf bottom right */}
      <div className="fixed bottom-8 left-8 w-16 h-16 text-accent-400 opacity-40 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer animate-float-slow z-50"
           title="🌿 Easter Egg: Jedes Projekt ist einzigartig!">
        <OrganicShape variant="leaf" className="w-full h-full hover:animate-wiggle" />
      </div>
    </div>
  );
};

export default Contact;
