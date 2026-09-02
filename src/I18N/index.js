// ============================================================
// i18next
// ============================================================
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ============================================================
// Translation Files
// ============================================================
// import en from "./locales/en/translation.json";
import ar from "../../public/translation/ar.json";

// ============================================================
// Configuration
// ============================================================
i18n
  .use(initReactI18next)
  .init({
    resources: {
      // en: { translation: en },
      ar: { translation: ar },
    },

    // lng: "en",

    lng: localStorage.getItem("selectedLang") || "en", // اللغة الافتراضية
    fallbackLng: "en", // لو اللغة مش موجودة

    interpolation: {
      escapeValue: false,
    },
  });

// ============================================================
// Export
// ============================================================
export default i18n;