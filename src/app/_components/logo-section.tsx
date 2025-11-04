'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import AboutIcon from '@/app/about/about-icon'
import ContactIcon from '@/app/contact/contact-icon'

gsap.registerPlugin(ScrollTrigger)

export default function LogoShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const shimmerRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // ---- shimmer rotation and glow ----
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
        '--angle': (v: string) => `${(Number.parseFloat(v) % 360).toFixed(2)}deg`,
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
      filter: 'drop-shadow(0 0 40px rgba(215,180,106,0.55))',
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [])

  // ---- scroll reveal cards ----
  useLayoutEffect(() => {
    const section = sectionRef.current
    const logo = logoRef.current
    const about = aboutRef.current
    const contact = contactRef.current
    if (!section || !logo || !about || !contact) return

    const setRevealAnchor = () => {
      const logoRect = logo.getBoundingClientRect()
      const cards = [about, contact]
      for (const el of cards) {
        const r = el.getBoundingClientRect()
        const cx = logoRect.left + logoRect.width / 2 - r.left
        const cy = logoRect.top + logoRect.height / 2 - r.top
        el.style.setProperty('--reveal-x', `${cx}px`)
        el.style.setProperty('--reveal-y', `${cy}px`)
      }
    }

    gsap.set([about, contact], {
      opacity: 0,
      scale: 0.96,
      filter: 'blur(12px)',
      clipPath: 'circle(0px at var(--reveal-x,50%) var(--reveal-y,50%))',
      willChange: 'opacity, transform, filter, clip-path',
    })

    setRevealAnchor()
    const ro = new ResizeObserver(() => {
      setRevealAnchor()
      ScrollTrigger.refresh()
    })
    ro.observe(section)
    ro.observe(logo)
    window.addEventListener('resize', setRevealAnchor)

    const ctx = gsap.context(() => {
      gsap.to(about, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        clipPath: 'circle(350% at var(--reveal-x) var(--reveal-y))',
        ease: 'power2.out',
        duration: 1.8,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: '+=10%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.to(contact, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        clipPath: 'circle(350% at var(--reveal-x) var(--reveal-y))',
        ease: 'power2.out',
        duration: 1.8,
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: '+=10%',
          toggleActions: 'play none none reverse',
        },
      })
    }, section)

    return () => {
      ctx.revert()
      window.removeEventListener('resize', setRevealAnchor)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      className='relative flex flex-col lg:flex-row items-center justify-between
                 min-h-screen gap-10 px-4 bg-transparent text-white
                 overflow-visible max-w-screen-2xl mx-auto pt-[10vh] pb-[10vh]
                 lg:pt-0 lg:pb-0'
      ref={sectionRef}
    >
      {/* CONTACT */}
      <div
        className='order-3 lg:order-1 w-full lg:w-[340px] max-w-[90vw]
                   relative p-8 lg:p-10 rounded-2xl
                   bg-[rgba(10,10,25,0.4)] backdrop-blur-xl
                   border border-[#d7b46a]/40
                   shadow-[0_0_25px_rgba(215,180,106,0.1),inset_0_1px_1px_rgba(255,255,255,0.05)]
                   transition-transform duration-300 hover:scale-[1.02]'
        ref={contactRef}
        style={{
          opacity: 0,
          transform: 'scale(0.96)',
          filter: 'blur(12px)',
          clipPath: 'circle(0px at var(--reveal-x,50%) var(--reveal-y,50%))',
        }}
      >
        <div className='flex flex-col items-center text-center'>
          <ContactIcon className='w-24 h-28 mb-6' />
          <p className='opacity-80 mb-6 leading-relaxed text-sm text-[#FFF8DC]/80'>
            Enjoy fitting the designer's tailoring that matches your aura at our store
          </p>
          <Link
            className='rounded-lg border border-[#d7b46a] bg-[#d7b46a]/10 px-6 py-2.5 text-sm
                       hover:bg-[#d7b46a]/20 transition-all text-[#d7b46a] font-medium'
            href='/contact'
          >
            Visit Northman Showroom
          </Link>
        </div>
      </div>

      {/* LOGO WITH SHIMMER */}
      <div
        className='relative order-2 flex items-center justify-center flex-shrink-0'
        ref={logoRef}
      >
        <div className='relative w-[320px] h-[320px]'>
          <Image
            alt='Northman Logo'
            className='object-contain pointer-events-none select-none'
            fill
            priority
            src='/logo-golden.png'
          />

          {/* shimmer overlay */}
          <div
            className='absolute inset-0 pointer-events-none'
            ref={shimmerRef}
            style={
              {
                maskImage: 'url(/logo-golden.png)',
                WebkitMaskImage: 'url(/logo-golden.png)',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                '--angle': '0deg',
                '--intensity': 1.2,
                background: `
                  radial-gradient(140% 140% at 50% 45%,
                    rgba(215,180,106,0.12) 0%,
                    rgba(215,180,106,0.08) 40%,
                    rgba(215,180,106,0.00) 85%),
                  conic-gradient(from calc(var(--angle) + 180deg) at 55% 50%,
                    rgba(215,180,106, calc(var(--intensity) * 0.0)) 0deg,
                    rgba(215,180,106, calc(var(--intensity) * 0.8)) 20deg,
                    rgba(255,255,255, calc(var(--intensity) * 1.0)) 40deg,
                    rgba(215,180,106, calc(var(--intensity) * 0.8)) 60deg,
                    rgba(215,180,106, calc(var(--intensity) * 0.0)) 80deg,
                    rgba(215,180,106, calc(var(--intensity) * 0.0)) 360deg)
                `,
                mixBlendMode: 'overlay',
                opacity: 0.95,
                willChange: 'transform, opacity, filter, background',
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      {/* ABOUT */}
      <div
        className='order-1 lg:order-3 w-full lg:w-[340px] max-w-[90vw]
                   relative p-8 lg:p-10 rounded-2xl
                   bg-[rgba(10,10,25,0.4)] backdrop-blur-xl
                   border border-[#d7b46a]/40
                   shadow-[0_0_25px_rgba(215,180,106,0.1),inset_0_1px_1px_rgba(255,255,255,0.05)]
                   transition-transform duration-300 hover:scale-[1.02]'
        ref={aboutRef}
        style={{
          opacity: 0,
          transform: 'scale(0.96)',
          filter: 'blur(12px)',
          clipPath: 'circle(0px at var(--reveal-x,50%) var(--reveal-y,50%))',
        }}
      >
        <div className='flex flex-col items-center text-center'>
          <AboutIcon className='w-24 h-28 mb-6' />
          <h3 className='font-semibold mb-3 text-xl text-[#d7b46a]'>The Art of Manliness</h3>
          <p className='opacity-80 mb-6 leading-relaxed text-sm text-[#FFF8DC]/80'>
            Exclusively cut for your prestigious silent impact. Northman is on a mission to make
            outfits that match the elegance of the modern chivalry
          </p>
          <Link
            className='rounded-lg border border-[#d7b46a] bg-[#d7b46a]/10 px-6 py-2.5 text-sm
                       hover:bg-[#d7b46a]/20 transition-all text-[#d7b46a] font-medium'
            href='/about'
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  )
}
