"use client";
import { WrenchIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface Service {
  title: string
  description: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const services: Service[] = [
  {
    title: 'Mycie ręczne',
    Icon: WrenchIcon,
    description: 'Dokładne mycie karoserii i felg specjalistycznymi środkami.',
  },
  {
    title: 'Renowacja lakieru',
    Icon: SparklesIcon,
    description: 'Usuwanie zarysowań i przywracanie głębi koloru lakieru.',
  },
  {
    title: 'Detailing wnętrza',
    Icon: SparklesIcon,
    description: 'Czyszczenie i konserwacja tapicerki oraz kokpitu.',
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Usługi</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="p-6 rounded-lg shadow-sm border hover:shadow-md transition"
            >
              <Icon className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
