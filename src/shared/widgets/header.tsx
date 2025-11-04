import { IconBrandInstagram } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header
      className='
        flex items-center justify-between px-6 py-4 bg-transparent text-left fixed top-0 right-0 w-full z-20'
      dir='ltr'
    >
      <Link
        className='text-lg font-medium tracking-tight hover:opacity-80 transition-opacity'
        href='/'
      >
        <Image alt='Northman Logo' height={20} src='/logo-golden-NM.png' width={60} />
      </Link>

      <a
        aria-label='Instagram'
        className='hover:opacity-60 transition-opacity text-[#d7b46a]'
        href='https://www.instagram.com/northmanofficial_/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <IconBrandInstagram size={45} stroke={1} />
      </a>
    </header>
  )
}
