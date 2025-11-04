import { IconShoppingCart } from '@tabler/icons-react'
import type { Route } from 'next'
import Link from 'next/link'

export function Hero() {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Background video */}
      <video
        autoPlay
        className='absolute inset-0 w-full h-full object-cover'
        loop
        muted
        playsInline
        poster='/hero/hero.jpg'
        preload='auto'
        src='/hero/hero.webm'
      />
      {/* Subtle overlay */}
      <div className='absolute inset-0 bg-black/20' />
      {/* Center-bottom button */}
      <div className='absolute bottom-16 left-1/2 -translate-x-1/2'>
        <Link
          className='
            group
            relative inline-flex items-center gap-2 px-8 py-3
            rounded-xl border border-white/30
            text-white text-sm font-medium tracking-wide
            backdrop-blur-sm whitespace-nowrap
            min-w-60
            transition-all duration-300
            hover:bg-white/10 hover:border-white/60
            hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]
          '
          href={'/shop' as Route}
        >
          <IconShoppingCart className='transition-transform duration-300 group-hover:scale-110 group-hover:text-[#f5c842]' />
          <span className='relative'>
            Shop for the Mission
            <span
              className='
                absolute inset-x-0 bottom-0
                h-px bg-linear-to-r from-transparent via-white/70 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              '
            />
          </span>
        </Link>
      </div>
    </section>
  )
}
