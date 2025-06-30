"use client";
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.h1
        ref={headingRef}
        className="text-4xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Profesjonalny Auto Detailing
      </motion.h1>
      <motion.p
        className="text-lg sm:text-2xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Zadbaj o blask swojego samochodu
      </motion.p>
    </section>
  )
}
