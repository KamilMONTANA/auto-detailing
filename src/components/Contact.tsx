"use client";
export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h2>
        <p className="text-gray-600 mb-6">Zadzwoń pod numer <a href="tel:+48123123123" className="text-blue-600 underline">+48 123 123 123</a> lub odwiedź nasz salon.</p>
        <a
          href="mailto:kontakt@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Napisz do nas
        </a>
      </div>
    </section>
  )
}
