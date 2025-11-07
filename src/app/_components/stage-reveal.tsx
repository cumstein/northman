'use client'

import { motion, useInView } from 'motion/react'
import { useLayoutEffect, useRef } from 'react'
import AnimatedSlogan from '@/app/_components/animated-slogan'

export default function StageReveal() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const lampRefs = useRef<Array<HTMLDivElement | null>>([])
  const isLogoInView = useInView(logoRef, { amount: 0.45 })
  const isSectionInView = useInView(sectionRef, { amount: 0.15 })

  // === Geometry-based auto-aim ===
  useLayoutEffect(() => {
    if (!isSectionInView) return

    const lastAngles = new WeakMap<HTMLElement, number>()
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

        // Skip tiny changes to avoid style thrash on scroll
        const prev = lastAngles.get(groupEl as HTMLElement) ?? Number.NaN
        if (Number.isFinite(prev) && Math.abs(prev - deg) < 0.5) return
        lastAngles.set(groupEl as HTMLElement, deg)

        groupEl.style.setProperty('--aim', `${deg}deg`)
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
  }, [isSectionInView])

  return (
    <section
      className='relative flex flex-col items-center justify-evenly my-0 overflow-hidden h-screen'
      ref={sectionRef}
    >
      {/* --- ENVIRONMENT BACKDROP --- */}
      <div aria-hidden className='stage-environment'>
        <div className='stage-backdrop stage-backdrop--gradient' />
        <div className='stage-backdrop stage-backdrop--bokeh' />
        <div className='stage-truss'>
          <div className='stage-truss__beam' />
          <div className='stage-truss__support stage-truss__support--left' />
          <div className='stage-truss__support stage-truss__support--right' />
          <div className='stage-truss__rig stage-truss__rig--left' />
          <div className='stage-truss__rig stage-truss__rig--right' />
        </div>
        <motion.div
          aria-hidden
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          className='stage-particles'
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
        <div className='stage-haze stage-haze--left' />
        <div className='stage-haze stage-haze--center' />
        <div className='stage-haze stage-haze--right' />
      </div>

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
      <div className='stage-logo-wrapper'>
        {/* biome-ignore lint: false positive */}
        <motion.img
          alt='Northman Logo'
          animate={{
            opacity: isLogoInView ? 1 : 0,
            scale: isLogoInView ? 1 : 0.9,
          }}
          className='stage-logo'
          initial={{ opacity: 0, scale: 0.9 }}
          ref={logoRef}
          src='/logo-golden.png'
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.img
          alt='Northman Logo reflection'
          animate={{
            opacity: isLogoInView ? 0.4 : 0,
            scale: isLogoInView ? 1 : 0.94,
          }}
          aria-hidden
          className='stage-logo stage-logo--reflection'
          initial={{ opacity: 0, scale: 0.94 }}
          src='/logo-golden.png'
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
        />
      </div>

      {/* BLOOM */}
      <div className='stage-bloom' />

      {/* GLOW */}
      <div className='stage-floor-light' />

      {/* FLOOR & ATMOSPHERE */}
      <div aria-hidden className='stage-floor'>
        <div className='stage-floor__surface' />
        <div className='stage-floor__edge' />
        <motion.div
          animate={{ backgroundPositionX: ['0%', '100%'] }}
          className='stage-floor__sheen'
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
        />
      </div>
    </section>
  )
}
