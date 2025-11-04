'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedSlogan from '@/app/_components/animated-slogan'

export default function StageReveal() {
  const sectionRef = useRef(null)
  const logoRef = useRef(null)
  const isLogoInView = useInView(logoRef, { amount: 0.45 })

  return (
    <section
      className='relative flex flex-col items-center justify-center overflow-hidden min-h-screen bg-[#000030]'
      ref={sectionRef}
    >
      {/* Lamp Group Container */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] flex justify-between px-[12%] md:px-[14%] lg:px-[18%] z-30 pointer-events-none'>
        {/* Left Lamp Group */}
        <div className='lamp-group'>
          <div className={`stage-lamp ${isLogoInView ? 'lamp-on' : 'lamp-off'}`} />
          <div className={`lamp-beam beam-left ${isLogoInView ? 'beam-on' : 'beam-off'}`} />
        </div>

        {/* Right Lamp Group */}
        <div className='lamp-group'>
          <div className={`stage-lamp ${isLogoInView ? 'lamp-on' : 'lamp-off'}`} />
          <div className={`lamp-beam beam-right ${isLogoInView ? 'beam-on' : 'beam-off'}`} />
        </div>
      </div>

      {/*  Slogan */}
      <AnimatedSlogan />

      {/*  Logo Reveal */}
      {/* biome-ignore lint: false */}
      <motion.img
        alt='Northman Logo'
        className='relative z-40 mt-32 w-[340px] object-contain pointer-events-none select-none'
        initial={{ opacity: 0, scale: 0.9 }}
        ref={logoRef}
        src='/logo-golden.png'
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ amount: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
      />

      {/* Stage Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-48 rounded-full bg-[#d7b46a]/25 blur-[120px] opacity-70' />
    </section>
  )
}
