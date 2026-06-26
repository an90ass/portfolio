import en from './i18n/en.json'
import ar from './i18n/ar.json'
import tr from './i18n/tr.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ar,
    tr,
  },
}))