import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'

import '../shared/styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/providers'
import { cn } from '@/shared/utils'
import { Footer, Header } from '@/shared/widgets'

const vazir = Vazirmatn({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://northman.ir'),
  title: {
    default: 'Northman | مردانگی معاصر',
    template: '%s | Northman',
  },
  description: `نورث‌من: لباس‌هایی با اصالت و طراحی مدرن برای آقایان شیک‌پوش. تجربه‌ای خاص از پوشش مردانه با بهترین کیفیت.
  منیفستوی نورث من:

تو نقشِ اولی؛ ما نقش مکمل

قدم بردار: قاطع، بی‌هیاهو، بی‌باک.

پوشاکت مثل سایه توست: طراحی شده برای تأثیر در سکوت.
ظرافتِ بی‌هیاهو؛ صلابتِ بی‌تکلف.
پرستیژ؛ نه نمایش.

هر خط در خدمتِ هدفی‌ست:
شانه‌هایی که جهان را به دوش می‌کشند،
کمرگاهی که عزم را قاب می‌گیرد،
جیب‌های منضبط، درزهای دقیق.

پارچه‌ای برمی‌گزینیم که با ماموریت تو تناسب دارد و دوختی که مانند تو سخت کار می‌کند.
هدف ضروریست، مد انتخابی

احترام را تو به‌دست می‌آوری؛ ما ارج می‌نهیم—
با دوختی که به زمانت، مأموریتت و قولت احترام می‌گذارد.
وقتی وارد می‌شوی، نگاه‌ها جمع می‌شوند؛
وقتی سخن می‌گویی، تحسین می کنند. 
رقص طراحی ما با فلسفه تو.

این مردانگی معاصر است: تأمین‌گر، نگهبان، سازنده.
نوستالژیک نه، بلکه بی‌زمان. 
پرهیاهو نه؛
فراموش‌نشدنی.


نورث من : پوشاک ماموریت تو
  `,

  keywords: [
    'Northman',
    'کت‌وشلوار',
    'پوشاک مردانه',
    'لباس رسمی',
    'مد ایرانی',
    'فروشگاه لباس مردانه',
  ],
  openGraph: {
    title: 'Northman | مردانگی معاصر ',
    description: 'نورث‌من: لباس‌هایی با اصالت و طراحی مدرن برای آقایان شیک‌پوش.',
    url: 'https://northman.ir',
    siteName: 'Northman',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Northman Brand Cover',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northman | مردانگی معاصر ',
    description: 'لباس‌های با اصالت برای آقایان باوقار و مدرن.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://northman.ir',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir='ltr' lang='fa' suppressHydrationWarning>
      <head>
        <link as='video' href='/hero/hero.webm' rel='preload' type='video/webm' />
        <Script id='organization-schema' strategy='afterInteractive' type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Northman',
            url: 'https://northman.ir',
            logo: 'https://northman.ir/logo.png',
            sameAs: [
              'https://instagram.com/northmanofficial_/',
              'https://t.me/northmanofficial_/',
              'https://wa.me/+989113178217',
            ],
          })}
        </Script>
      </head>

      <body className={cn(vazir.className, 'flex flex-col flex-1 antialiased overflow-x-hidden')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
          enableSystem
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
