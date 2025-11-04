'use client'

import Image from 'next/image'

export default function ContactIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        alt='Contact Icon'
        className='object-contain pointer-events-none select-none'
        fill
        priority
        src='/svg/contact.svg'
      />
    </div>
  )
}
