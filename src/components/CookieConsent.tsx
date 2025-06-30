"use client"
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const accepted = localStorage.getItem('cookie-consent')
    setVisible(!accepted)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 text-sm flex flex-col sm:flex-row items-center justify-between z-50">
      <p className="mb-2 sm:mb-0">
        Ta strona wykorzystuje pliki cookies zgodnie z RODO. Kontynuując przeglądanie, akceptujesz
        <a href="/privacy" className="underline ml-1">politykę prywatności</a>.
      </p>
      <button onClick={accept} className="bg-blue-600 px-4 py-2 rounded">
        Akceptuję
      </button>
    </div>
  )
}
