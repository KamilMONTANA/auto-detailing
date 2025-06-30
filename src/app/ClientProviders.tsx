"use client"
import { ReactNode } from 'react'
import { AccessibilityProvider } from '@/contexts/AccessibilityContext'
import AccessibilityPanel from '@/components/AccessibilityPanel'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AccessibilityProvider>
      {children}
      <AccessibilityPanel />
    </AccessibilityProvider>
  )
}
