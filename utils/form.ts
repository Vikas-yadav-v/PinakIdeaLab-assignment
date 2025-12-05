export type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s()+-]+$/
  return phone.length === 0 || phoneRegex.test(phone)
}

export function resetForm(): FormData {
  return { ...INITIAL_FORM_DATA }
}
