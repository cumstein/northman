import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconMapPin,
} from '@tabler/icons-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='pt-8'>
      <div className='container px-6'>
        {/* --- Bottom Section --- */}
        <div className='mt-12 flex flex-col items-center justify-center gap-4 py-6 text-center md:flex-row md:justify-between md:gap-0'>
          {/* Mobile order: Powered → Rights → Icons */}
          <div className='order-1 md:order-2 text-sm'>
            <span className='text-muted-foreground'>
              {new Date().getFullYear()} © Northman. All rights reserved
            </span>
          </div>

          <div className='order-0 md:order-1'>
            <p className='text-sm text-muted-foreground'>
              Powered by{' '}
              <span className='font-semibold text-[#f5c842] animate-[glowPulse_3s_ease-in-out_infinite]'>
                CYRAYS
              </span>
            </p>
          </div>

          <div className='order-2 md:order-3 flex justify-center gap-6'>
            {/* Telegram */}
            <Link
              aria-label='تلگرام'
              className='text-muted-foreground hover:text-secondary block'
              href='https://t.me/+989113178217'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconBrandTelegram />
            </Link>

            {/* Instagram */}
            <Link
              aria-label='اینستاگرام'
              className='text-muted-foreground hover:text-secondary block'
              href='https://www.instagram.com/northmanofficial_/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconBrandInstagram />
            </Link>

            {/* WhatsApp */}
            <Link
              aria-label='واتساپ'
              className='text-muted-foreground hover:text-secondary block'
              href='https://wa.me/+989113178217'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconBrandWhatsapp />
            </Link>

            {/* Location */}
            <Link
              aria-label='موقعیت فروشگاه'
              className='text-muted-foreground hover:text-secondary block'
              href='https://maps.app.goo.gl/Bvr2tVMtvFpRiarx6'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconMapPin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
