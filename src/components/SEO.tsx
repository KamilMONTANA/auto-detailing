"use client"
import dynamic from 'next/dynamic'
import config from '../../next-seo.config'

const DefaultSeo = dynamic(() => import('next-seo').then(m => m.DefaultSeo), { ssr: false })

export default function SEO() {
  return <DefaultSeo {...config} />
}
