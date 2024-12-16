import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { uz } from "../uz"
import { ru } from "../ru"
import { en } from "../en"

i18n.use(initReactI18next).init({
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        uz: uz,
        en: en,
    }
});
export default i18n;
