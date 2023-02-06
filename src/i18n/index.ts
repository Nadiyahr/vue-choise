import { createI18n } from 'vue-i18n';
import { Locales } from "./Locales.service";

import en from './en.json'
import it from "./it.json";

const locale = 'en';

const i18n = createI18n({
  locale,
  legacy: false,
  messages: {
    [Locales.EN]: en,
    [Locales.IT]: it
  }
});

export default i18n;
