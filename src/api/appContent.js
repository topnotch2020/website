import { DEFAULT_APP_CONTENT } from '../constants/defaultAppContent.js'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

let cachedContent = null

export async function fetchAppContent(force = false) {
  if (cachedContent && !force) return cachedContent

  if (!API_BASE_URL) {
    cachedContent = DEFAULT_APP_CONTENT
    return DEFAULT_APP_CONTENT
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/meta/app-content`)
    if (!response.ok) throw new Error('Failed to fetch app content')

    const result = await response.json()
    const payload = result?.data

    if (payload?.privacyPolicy?.sections?.length && payload?.helpSupport?.channels?.length) {
      cachedContent = payload
      return payload
    }
  } catch (error) {
    console.warn('Using default app content:', error)
  }

  cachedContent = DEFAULT_APP_CONTENT
  return DEFAULT_APP_CONTENT
}
