export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString()
}
