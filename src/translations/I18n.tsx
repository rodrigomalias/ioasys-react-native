import i18n from "i18n-js"

import en from "./locales/en.json"
import pt_BR from "./locales/pt-BR.json"

i18n.defaultLocale = "en"
i18n.locale = "pt_BR"
i18n.fallbacks = true
i18n.translations = { en, pt_BR }

export default i18n