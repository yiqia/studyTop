export function localGet(key: string) {
  const value = window.localStorage.getItem(key)
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

export function localSet(key: string, value: string) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove(key: string) {
  window.localStorage.removeItem(key)
}
