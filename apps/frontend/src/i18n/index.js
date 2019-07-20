import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocale from './locales/en.json';
i18n
    .use(initReactI18next)
    .init({
    resources: {
        en: enLocale
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false
    }
});
//# sourceMappingURL=index.js.map