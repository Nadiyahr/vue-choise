export enum Locales {
  EN = 'en',
  IT = 'it',
}

export const LOCALES = [
  { value: Locales.EN, caption: 'English' },
  { value: Locales.IT, caption: 'Italiano' }
]

// const i18nService = {
//   defaultLanguage: 'en',

//   languages: [
//     { value: 'EN', caption: 'English' },
//     { value: 'IT', caption: 'Italiano' }
//   ],
//   setActiveLanguage(lang: string) {
//     localStorage.setItem("language", lang);
//   },
//   getActiveLanguage() {
//     return localStorage.getItem("language") || this.defaultLanguage;
//   }
// }

// export default i18nService;
