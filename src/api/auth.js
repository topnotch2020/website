const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

async function parseJsonResponse(response) {
  try {
    return await response.json()
  } catch {
    return {}
  }
}

export async function setPassword(token, password) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/set-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, password }),
  })

  const data = await parseJsonResponse(response)
  if (!response.ok) {
    throw new Error(data.message || 'Failed to set password')
  }
  return data
}

export async function forgotPassword(email) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim().toLowerCase() }),
  })

  const data = await parseJsonResponse(response)
  if (!response.ok) {
    throw new Error(data.message || 'Unable to send reset link')
  }
  return data
}
