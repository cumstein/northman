'use client'

import { motion, type Variants } from 'motion/react'

const container: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.07,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      duration: 1.2,
    },
  },
}

const word: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 25 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  },
}

export default function AnimatedSlogan() {
  const title = 'The Art of Manliness'
  const description =
    'Exclusively cut for your prestigious silent impact. Northman is on a mission to make outfit that matches the elegance of the modern chivalry…'

  return (
    <motion.section
      className='w-full text-center text-white overflow-hidden z-9998'
      initial='hidden'
      variants={container}
      viewport={{ once: true, amount: 0.4 }}
      whileInView='visible'
    >
      <div className='max-w-md mx-auto'>
        <h2 className='text-[#d7b46a] text-3xl font-semibold mb-4'>
          {title.split(' ').map((wordText, idx) => (
            <motion.span
              className='inline-block mr-2 will-change-transform'
              // biome-ignore lint/suspicious/noArrayIndexKey: static list; index is acceptable here
              key={idx}
              variants={word}
            >
              {wordText}
            </motion.span>
          ))}
        </h2>
        <p className='text-m text-[#FFF8DC]/80 leading-relaxed'>
          {description.split(' ').map((wordText, idx) => (
            <motion.span
              className='inline-block mr-[0.35rem] will-change-transform'
              // biome-ignore lint/suspicious/noArrayIndexKey: static list; index is acceptable here
              key={idx}
              variants={word}
            >
              {wordText}
            </motion.span>
          ))}
        </p>
      </div>
    </motion.section>
  )
}
