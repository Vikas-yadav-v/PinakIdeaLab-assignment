/**
 * Utility function to merge Tailwind CSS classes conditionally
 * Helps manage complex className patterns
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
