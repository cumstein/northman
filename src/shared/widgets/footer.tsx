import { IconBrandInstagram, IconClock, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className=' text-gray-300 pt-24 border-t border-white/5'>
      <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
        {/* --- Map --- */}
        <div className='w-full  '>
          <iframe
            allowFullScreen
            className='
            rounded-xl border border-[#d7b46a]/80 w-full
            shadow-[0_0_25px_rgba(215,180,106,0.5),0_0_60px_rgba(215,180,106,0.35)]
            hover:shadow-[0_0_35px_rgba(215,180,106,0.7),0_0_90px_rgba(215,180,106,0.5)]
            transition-shadow duration-700 ease-out'
            height='300'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3256.1238038556303!2d49.58850273956225!3d37.30278007219749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd90030027f33%3A0xe181fc637dee5018!2zTm9ydGhtYW4g2YbZiNix2Ksg2YXZhg!5e1!3m2!1sen!2sde!4v1762241794146!5m2!1sen!2sde'
            title='Store Location'
            width='100%'
          ></iframe>
        </div>

        {/* --- Explore Links --- */}
        <div className='flex flex-col space-y-3 text-left my-auto'>
          <h3 className='text-white font-semibold text-lg mb-2'>Explore</h3>
          <Link className='hover:text-[#d7b46a] transition-colors' href='/'>
            Home
          </Link>
          <Link className='hover:text-[#d7b46a] transition-colors' href='/about'>
            About
          </Link>
          <Link className='hover:text-[#d7b46a] transition-colors' href='/#'>
            Shop
          </Link>
          <Link className='hover:text-[#d7b46a] transition-colors' href='/contact'>
            Contact
          </Link>
        </div>

        {/* --- Contact Info --- */}
        <div className='flex flex-col space-y-3 text-left my-auto'>
          <h3 className='text-white font-semibold text-lg mb-2'>Contact Us</h3>

          <a
            className='flex items-center gap-3 hover:text-[#d7b46a] transition-colors'
            href='https://maps.app.goo.gl/Bvr2tVMtvFpRiarx6'
            rel='noopener noreferrer'
            target='_blank'
          >
            <IconMapPin className='text-[#d7b46a]' size={20} />
            <span>Golsar Blvd, Rasht, Gilan Province, Iran</span>
          </a>

          <a
            className='flex items-center gap-3 hover:text-[#d7b46a] transition-colors'
            href='tel:+981332117566'
          >
            <IconPhone className='text-[#d7b46a]' size={20} />
            <span dir='ltr'>+98 13 3211 7566</span>
          </a>

          <a
            className='flex items-center gap-3 hover:text-[#d7b46a] transition-colors'
            href='mailto:info@cyrays.com'
          >
            <IconMail className='text-[#d7b46a]' size={20} />
            <span>info@cyrays.com</span>
          </a>

          <a
            className='flex items-center gap-3 hover:text-[#d7b46a] transition-colors'
            href='https://www.instagram.com/northmanofficial_/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <IconBrandInstagram className='text-[#d7b46a]' size={20} />
            <span dir='ltr'>@northmanofficial_</span>
          </a>

          <div className='flex items-center gap-3'>
            <IconClock className='text-[#d7b46a]' size={20} />
            <span>Saturday – Thursday, 10:00 AM to 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className='border-t border-white/10 mt-12 pt-6 pb-2 text-center text-sm flex flex-col items-center justify-center gap-2'>
        <p className='text-gray-400'>
          © Designed & developed by{' '}
          <span className='text-[#f5c842] font-semibold hover:drop-shadow-[0_0_10px_rgba(245,200,66,0.8)] transition-all'>
            CYRAYS
          </span>
        </p>
        <p className='text-gray-400'>
          © {new Date().getFullYear()} <span className='font-semibold text-white'>Northman</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
