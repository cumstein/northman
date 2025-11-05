'use client'

import { motion, useInView } from 'motion/react'
import { useLayoutEffect, useRef } from 'react'
import AnimatedSlogan from '@/app/_components/animated-slogan'

export default function StageReveal() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const lampRefs = useRef<Array<HTMLDivElement | null>>([])
  const isLogoInView = useInView(logoRef, { amount: 0.45 })

  // === Geometry-based auto-aim ===
  useLayoutEffect(() => {
    const updateAim = () => {
      const logo = logoRef.current
      if (!logo) return
      const logoRect = logo.getBoundingClientRect()
      const logoX = logoRect.left + logoRect.width / 2
      const logoY = logoRect.top + logoRect.height / 2

      lampRefs.current.forEach((groupEl) => {
        if (!groupEl) return
        const lampEl = groupEl.querySelector('.stage-lamp') as HTMLElement | null
        if (!lampEl) return

        const lampRect = lampEl.getBoundingClientRect()
        const originX = lampRect.left + lampRect.width / 2
        const originY = lampRect.top + lampRect.height * 0.55

        const dx = logoX - originX
        const dy = logoY - originY
        const deg = (Math.atan2(dy, dx) * 180) / Math.PI

        groupEl.style.setProperty('--aim', `${deg}deg`)
        // rotate lamp slightly less than beam for realism
        groupEl.style.setProperty('--lamp-tilt', `${deg - 90}deg`)
      })
    }

    const handle = () => requestAnimationFrame(updateAim)
    updateAim()

    window.addEventListener('resize', handle)
    window.addEventListener('scroll', handle, { passive: true })
    const ro = new ResizeObserver(handle)
    if (sectionRef.current) ro.observe(sectionRef.current)

    return () => {
      window.removeEventListener('resize', handle)
      window.removeEventListener('scroll', handle)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      className='relative flex flex-col items-center justify-evenly my-4 overflow-hidden min-h-screen'
      ref={sectionRef}
    >
      {/* --- SLOGAN --- */}
      <AnimatedSlogan />

      {/* --- LAMPS ROW --- */}
      <motion.div
        className='absolute inset-x-0 top-[45%] md:top-[30%] lg:top-[28%] lg:left-[12%] lg:right-[12%] z-30 pointer-events-none flex justify-between px-[10%] sm:px-[8%] md:px-[12%]'
        initial={{ opacity: 0, y: -30 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {['left', 'right'].map((side, i) => (
          <div
            className='lamp-group'
            key={side}
            ref={(el) => {
              lampRefs.current[i] = el
            }}
          >
            <div className={`stage-lamp ${isLogoInView ? 'lamp-on' : 'lamp-off'}`} />
            <div className={`lamp-beam ${isLogoInView ? 'beam-on' : 'beam-off'}`} />
          </div>
        ))}
      </motion.div>

      {/* --- LOGO --- */}
      {/* biome-ignore lint: false positive */}
      <motion.img
        alt='Northman Logo'
        animate={{
          opacity: isLogoInView ? 1 : 0,
          scale: isLogoInView ? 1 : 0.9,
        }}
        className='relative z-40 mt-32 lg:mt-48 lg:mb-8 w-[360px] object-contain pointer-events-none select-none'
        initial={{ opacity: 0, scale: 0.9 }}
        ref={logoRef}
        src='/logo-golden.png'
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* BLOOM */}
      <div className='absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[300px] h-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,220,0.45)_0%,rgba(215,180,106,0.15)_55%,transparent_100%)] blur-[80px] opacity-80 pointer-events-none z-20' />

      {/* GLOW */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-48 rounded-full bg-[#d7b46a]/25 blur-[120px] opacity-70' />
    </section>
  )
}
