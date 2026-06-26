import en from '../../i18n/en.json'
import ar from '../../i18n/ar.json'
import tr from '../../i18n/tr.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as any
  if (i18n?.setLocaleMessage) {
    i18n.setLocaleMessage('en', en)
    i18n.setLocaleMessage('ar', ar)
    i18n.setLocaleMessage('tr', tr)
  }
})