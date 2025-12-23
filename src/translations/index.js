import { navTranslations } from '@translations/nav';
import { homeTranslations } from '@translations/home';
import { accessibilityTranslations } from '@translations/accessibility';
import { pagesTranslations } from '@translations/pages';
import { footerTranslations } from '@translations/footer';
import { contactTranslations } from '@translations/contact';

export const translations = {
  de: {
    nav: navTranslations.de,
    hero: homeTranslations.de.hero,
    home: {
      intro: homeTranslations.de.intro,
      whatIDo: homeTranslations.de.whatIDo,
      whyMe: homeTranslations.de.whyMe,
      cta: homeTranslations.de.cta
    },
    pages: pagesTranslations.de,
    contact: contactTranslations.de,
    footer: footerTranslations.de,
    a11y: accessibilityTranslations.de
  },
  en: {
    nav: navTranslations.en,
    hero: homeTranslations.en.hero,
    home: {
      intro: homeTranslations.en.intro,
      whatIDo: homeTranslations.en.whatIDo,
      whyMe: homeTranslations.en.whyMe,
      cta: homeTranslations.en.cta
    },
    pages: pagesTranslations.en,
    contact: contactTranslations.en,
    footer: footerTranslations.en,
    a11y: accessibilityTranslations.en
  }
};
