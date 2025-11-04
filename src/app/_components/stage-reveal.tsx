'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedSlogan from '@/app/_components/animated-slogan'

export default function StageReveal() {
  const sectionRef = useRef(null)
  const logoRef = useRef(null)
  const isLogoInView = useInView(logoRef, { amount: 0.45 })

  const lampPairs = [
    { id: 1, class: 'beam-l1', rotate: -25 },

    { id: 4, class: 'beam-l4', rotate: -5 },
    { id: 5, class: 'beam-r1', rotate: 5 },

    { id: 8, class: 'beam-r4', rotate: 25 },
  ]

  return (
    <section
      className='relative flex flex-col items-center justify-evenly my-4 overflow-hidden min-h-screen'
      ref={sectionRef}
    >
      {/* SLOGAN */}
      <AnimatedSlogan />

      {/* 4 LAMPS */}
      <motion.div
        className='relative flex justify-between w-full max-w-[1300px] px-[10%] z-30 pointer-events-none flex-wrap gap-x-4'
        initial={{ opacity: 0, y: -30 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {lampPairs.map((lamp) => (
          <div className='lamp-group' key={lamp.id}>
            <div className={`stage-lamp ${isLogoInView ? 'lamp-on' : 'lamp-off'}`} />
            <div
              className={`lamp-beam ${lamp.class} ${isLogoInView ? 'beam-on' : 'beam-off'}`}
              style={{ transform: `translate(-50%, 0) rotate(${lamp.rotate}deg)` }}
            />
          </div>
        ))}
      </motion.div>

      {/* LOGO */}
      {/** biome-ignore lint: false positive */}
      <motion.img
        alt='Northman Logo'
        animate={{ opacity: isLogoInView ? 1 : 0, scale: isLogoInView ? 1 : 0.9 }}
        className='relative z-40 mt-42 md:mt-32 lg:mt-48 lg:mb-8 w-[360px] object-contain pointer-events-none select-none'
        initial={{ opacity: 0, scale: 0.9 }}
        ref={logoRef}
        src='/logo.png'
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* BLOOM */}
      <div className='absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[300px] h-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,220,0.45)_0%,rgba(215,180,106,0.15)_55%,transparent_100%)] blur-[80px] opacity-80 pointer-events-none z-20' />

      {/* GLOW */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-48 rounded-full bg-[#d7b46a]/25 blur-[120px] opacity-70' />
    </section>
  )
}
