import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Auto Detailing Pro',
  description: 'Profesjonalne usługi auto detailingu i pielęgnacji pojazdów w Twojej okolicy.',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://example.com',
    siteName: 'Auto Detailing Pro',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default config
