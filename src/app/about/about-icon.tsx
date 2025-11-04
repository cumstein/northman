'use client'

import Image from 'next/image'

export default function AboutIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        alt='About Icon'
        className='object-contain pointer-events-none select-none'
        fill
        priority
        src='/svg/about.svg'
      />
    </div>
  )
}
