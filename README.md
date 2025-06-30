# Auto Detailing Pro

Strona internetowa prezentująca usługi profesjonalnego auto detailingu.

## Uruchomienie projektu

Instalacja zależności:

```bash
npm install
```

Uruchomienie środowiska deweloperskiego:

```bash
npm run dev
```

Aplikacja dostępna będzie pod adresem [http://localhost:3000](http://localhost:3000).

## Technologie

- [Next.js](https://nextjs.org/) z App Routerem
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com)
- [Next SEO](https://github.com/garmeeh/next-seo)

## Funkcje

Strona zawiera sekcję hero z animacjami, opis świadczonych usług oraz sekcję kontaktową. Konfiguracja SEO zapewnia lepszą widoczność w wyszukiwarkach.

## RODO i dostępność

Serwis spełnia wymogi RODO poprzez wyświetlanie banera zgody na pliki cookies i stronę z polityką prywatności. Zaimplementowano również panel dostępności pozwalający zwiększyć kontrast oraz rozmiar tekstu.

## Hosting w Cloudflare

Aplikację można wdrożyć na [Cloudflare Pages](https://pages.cloudflare.com). Po zbudowaniu projektu statyczne pliki znajdują się w katalogu `out`. Deployment wykonasz poleceniem:

```bash
npm run build
npm run deploy
```
