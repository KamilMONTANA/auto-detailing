import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności - Auto Detailing Pro',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Polityka prywatności</h1>
      <p className="mb-2">
        Dbamy o Twoją prywatność zgodnie z wymogami RODO. Dane podawane w
        formularzach są wykorzystywane wyłącznie do kontaktu i nie są
        przekazywane osobom trzecim.
      </p>
    </main>
  )
}
