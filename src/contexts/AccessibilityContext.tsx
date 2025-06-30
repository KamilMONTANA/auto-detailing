"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type AccessibilitySettings = {
  largeText: boolean
  highContrast: boolean
  toggleLargeText: () => void
  toggleHighContrast: () => void
}

const AccessibilityContext = createContext<AccessibilitySettings | undefined>(
  undefined
)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setLargeText(localStorage.getItem('largeText') === 'true')
    setHighContrast(localStorage.getItem('highContrast') === 'true')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('largeText', String(largeText))
    document.documentElement.dataset.largeText = String(largeText)
  }, [largeText])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('highContrast', String(highContrast))
    document.documentElement.dataset.highContrast = String(highContrast)
  }, [highContrast])

  const toggleLargeText = () => setLargeText(prev => !prev)
  const toggleHighContrast = () => setHighContrast(prev => !prev)

  return (
    <AccessibilityContext.Provider
      value={{ largeText, highContrast, toggleLargeText, toggleHighContrast }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
