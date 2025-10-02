import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - O2mations',
  description: 'Ready to transform your business? Schedule a strategy session with O2mations to discover how automation can unlock your potential.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}