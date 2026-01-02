import { navTranslations } from '@translations/nav';
import { homeTranslations } from '@translations/home';
import { accessibilityTranslations } from '@translations/accessibility';
import { pagesTranslations } from '@translations/pages';
import { footerTranslations } from '@translations/footer';
import { contactTranslations } from '@translations/contact';
import { portfolioTranslations } from '@translations/portfolio';
import { legalTranslations } from '@translations/legal';
import { commonTranslations } from '@translations/common';

export const translations = {
  de: {
    nav: navTranslations.de,
    hero: homeTranslations.de.hero,
    home: {
      intro: homeTranslations.de.intro,
      whatIDo: homeTranslations.de.whatIDo,
      whyMe: homeTranslations.de.whyMe,
      cta: homeTranslations.de.cta,
      easterEgg: homeTranslations.de.easterEgg
    },
    pages: pagesTranslations.de,
    portfolio: portfolioTranslations.de,
    contact: contactTranslations.de,
    footer: footerTranslations.de,
    a11y: accessibilityTranslations.de,
    legal: legalTranslations.de,
    common: commonTranslations.de
  },
  en: {
    nav: navTranslations.en,
    hero: homeTranslations.en.hero,
    home: {
      intro: homeTranslations.en.intro,
      whatIDo: homeTranslations.en.whatIDo,
      whyMe: homeTranslations.en.whyMe,
      cta: homeTranslations.en.cta,
      easterEgg: homeTranslations.en.easterEgg
    },
    pages: pagesTranslations.en,
    portfolio: portfolioTranslations.en,
    contact: contactTranslations.en,
    footer: footerTranslations.en,
    a11y: accessibilityTranslations.en,
    legal: legalTranslations.en,
    common: commonTranslations.en
  }
};
