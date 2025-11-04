'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function LogoShimmer() {
  const shimmerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = shimmerRef.current
    if (!el) return

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'sine.inOut' } })

    tl.to(el, {
      '--angle': -360,
      duration: 3,
      ease: 'none',
      repeat: -1,
      modifiers: {
        '--angle': (v: string) => `${(parseFloat(v) % 360).toFixed(2)}deg`,
      },
    })

    gsap.to(el, {
      '--intensity': 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(el, {
      opacity: 1.1,
      duration: 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      repeatDelay: 3.5,
    })

    gsap.to(el, {
      filter: 'drop-shadow(0 0 40px rgba(255,225,150,0.55))',
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className='relative w-56 sm:w-64 md:w-80 mx-auto'>
      {/* base logo with reflection */}
      <div className='relative'>
        <Image
          alt='Northman'
          className='w-full h-auto select-none pointer-events-none'
          height={512}
          priority
          src='/logo-golden.png'
          width={512}
        />
      </div>

      {/* shimmer overlay */}
      <div
        className='absolute inset-0 pointer-events-none'
        ref={shimmerRef}
        style={
          {
            // mask the layer to logo shape
            maskImage: 'url(/logo-golden.png)',
            WebkitMaskImage: 'url(/logo-golden.png)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',

            // animated vars
            '--angle': '0deg',
            '--intensity': 1.2,

            // cinematic shimmer gradient
            background: `
            radial-gradient(140% 140% at 50% 45%,
              rgba(255,220,130,0.12) 0%,
              rgba(255,220,130,0.08) 40%,
              rgba(255,220,130,0.00) 85%)
            ,
            conic-gradient(from calc(var(--angle) + 180deg) at 55% 50%,
              rgba(255,255,240, calc(var(--intensity) * 0.0)) 0deg,
              rgba(255,255,230, calc(var(--intensity) * 0.8)) 20deg,
              rgba(255,255,255, calc(var(--intensity) * 1.0)) 40deg,
              rgba(255,255,230, calc(var(--intensity) * 0.8)) 60deg,
              rgba(255,255,240, calc(var(--intensity) * 0.0)) 80deg,
              rgba(255,255,240, calc(var(--intensity) * 0.0)) 360deg)
          `,
            mixBlendMode: 'overlay',
            opacity: 0.95,
            willChange: 'transform, opacity, filter, background',
          } as React.CSSProperties
        }
      />
    </div>
  )
}
