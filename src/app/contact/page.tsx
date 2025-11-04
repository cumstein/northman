import { IconBrandInstagram, IconClock, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import type { Metadata } from 'next'
import ContactIcon from '@/app/contact/contact-icon'

export const metadata: Metadata = {
  title: 'تماس با نورث‌من | Northman',
  description:
    'برای ارتباط با مجموعه نورث‌من، سفارش‌ها یا همکاری‌های تجاری می‌توانید با ما تماس بگیرید. دفتر مرکزی در رشت، گلسار، بلوار سمیه قرار دارد.',
  alternates: { canonical: 'https://northman.ir/contact' },
  openGraph: {
    title: 'تماس با ما | نورث‌من',
    description:
      'اطلاعات تماس رسمی برند نورث‌من شامل تلفن، ایمیل، آدرس دفتر مرکزی و صفحه اینستاگرام.',
    url: 'https://northman.ir/contact',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'تماس با نورث‌من',
      },
    ],
  },
}

export default function ContactPage() {
  const infoClass =
    'flex items-center justify-center md:justify-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors'

  return (
    <main className='flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center space-y-8 bg-[#000030] text-gray-100'>
      {/* Top Icon */}
      <ContactIcon className='w-20 h-20 relative mb-2' />

      {/* Title */}
      <h1 className='text-3xl font-bold text-[#d7b46a]'>تماس با نورث‌من</h1>

      {/* Description */}
      <p className='max-w-2xl text-lg leading-relaxed'>
        برای سفارش دوخت اختصاصی، همکاری‌های تجاری یا پرسش‌های دیگر می‌توانید از راه‌های زیر با ما در
        ارتباط باشید.
      </p>

      {/* Contact Info */}
      <div className='w-full max-w-lg space-y-4 text-base text-right' dir='rtl'>
        <a
          className={infoClass}
          href='https://maps.app.goo.gl/Bvr2tVMtvFpRiarx6'
          rel='noopener noreferrer'
          target='_blank'
        >
          <IconMapPin className='text-[#d7b46a]' size={22} />
          <span>استان گیلان، رشت، گلسار، بلوار سمیه</span>
        </a>

        <a className={infoClass} href='tel:+981332117566'>
          <IconPhone className='text-[#d7b46a]' size={22} />
          <span dir='ltr'>+98 13 3211 7566</span>
        </a>

        <a className={infoClass} href='mailto:info@cyrays.com'>
          <IconMail className='text-[#d7b46a]' size={22} />
          <span>info@cyrays.com</span>
        </a>

        <a
          className={infoClass}
          href='https://www.instagram.com/northmanofficial_/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <IconBrandInstagram className='text-[#d7b46a]' size={22} />
          <span dir='ltr'>@northmanofficial_</span>
        </a>

        <div className={infoClass}>
          <IconClock className='text-[#d7b46a]' size={22} />
          <span>ساعات پاسخ‌گویی: شنبه تا پنج‌شنبه، ساعت ۱۰ صبح تا ۷ عصر</span>
        </div>
      </div>
    </main>
  )
}
