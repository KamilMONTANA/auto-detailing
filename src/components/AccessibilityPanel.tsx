"use client"
import { useState } from 'react'
import { useAccessibility } from '@/contexts/AccessibilityContext'

export default function AccessibilityPanel() {
  const { largeText, highContrast, toggleLargeText, toggleHighContrast } =
    useAccessibility()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 text-sm">
      <button
        aria-label="Ustawienia dostępności"
        onClick={() => setOpen(!open)}
        className="p-2 bg-black text-white rounded-full focus:outline-none"
      >
        A11y
      </button>
      {open && (
        <div className="mt-2 p-4 bg-white shadow-lg rounded border text-gray-900">
          <label className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={largeText}
              onChange={toggleLargeText}
            />
            <span>Większy tekst</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={highContrast}
              onChange={toggleHighContrast}
            />
            <span>Wysoki kontrast</span>
          </label>
        </div>
      )}
    </div>
  )
}
