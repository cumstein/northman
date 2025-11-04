import type { Metadata } from 'next'
import AboutIcon from '@/app/about/about-icon'

export const metadata: Metadata = {
  title: 'درباره نورث‌من | Northman',
  description:
    'برند نورث‌من با هدف ارائه پوشاک مردانه باکیفیت، طراحی اصیل و دوختی دقیق شکل گرفته است. نورث‌من تلفیقی از ظرافت مدرن و وقار کلاسیک است.',
  alternates: { canonical: 'https://northman.ir/about' },
  openGraph: {
    title: 'درباره برند نورث‌من',
    description:
      'با فلسفه و مأموریت برند نورث‌من آشنا شوید؛ پوشاکی خاص برای آقایان خاص. تجربه‌ی اصالت، وقار و استایل بی‌زمان.',
    url: 'https://northman.ir/about',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'درباره برند نورث‌من',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-8 bg-[#000030] text-gray-100'>
      {/* --- About Icon --- */}
      <AboutIcon className='w-20 h-20 relative mb-2' />

      {/* --- Title --- */}
      <h1 className='text-3xl font-bold text-[#d7b46a]'>درباره نورث‌من</h1>

      {/* --- Main Paragraphs --- */}
      <div className='max-w-2xl space-y-6 text-lg leading-relaxed'>
        <p>
          نورث‌من برندی است که با هدف خلق پوشاک مردانه‌ی لوکس و اصیل شکل گرفته است. در نورث‌من، ظرافت
          طراحی و دقت در دوخت، نتیجه‌ی سال‌ها تجربه و علاقه به هنر پوشاک مردانه است.
        </p>

        <p>
          ما باور داریم که لباس تنها پوششی برای ظاهر نیست، بلکه زبان بی‌کلام شخصیت است. از انتخاب
          پارچه تا آخرین جزئیات دوخت، هر مرحله با وسواس و احترام به سلیقه‌ی مردان باوقار طراحی می‌شود.
        </p>

        <p>
          مأموریت ما خلق تجربه‌ای متفاوت از پوشش مردانه است؛ تجربه‌ای که اصالت ایرانی، کیفیت جهانی و
          امضای نورث‌من را در خود دارد.
        </p>
      </div>
    </main>
  )
}
