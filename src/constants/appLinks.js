export const APP_DEEP_LINK_SCHEME = import.meta.env.VITE_APP_DEEP_LINK_SCHEME || 'brokerloop'
export const APP_ANDROID_PACKAGE = import.meta.env.VITE_APP_ANDROID_PACKAGE || 'com.topnotchh2020.brokerloop'

export function buildAppDeepLink(path, params = {}) {
  const qs = new URLSearchParams(params).toString()
  return `${APP_DEEP_LINK_SCHEME}://${path}${qs ? `?${qs}` : ''}`
}

export function buildAndroidIntentLink(path, params = {}) {
  const qs = new URLSearchParams(params).toString()
  return `intent://${path}${qs ? `?${qs}` : ''}#Intent;scheme=${APP_DEEP_LINK_SCHEME};package=${APP_ANDROID_PACKAGE};end`
}

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
