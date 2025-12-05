import { Mail, Phone, MapPin, type LucideIcon } from "lucide-react"

export type ContactInfo = {
  icon: LucideIcon
  title: string
  value: string
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "123 Business St, City, State 12345",
  },
]
