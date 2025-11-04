import Link from 'next/link'
import ContactIcon from '@/app/contact/contact-icon'

export default function ContactCard() {
  return (
    <section className='w-full mb-48 text-center text-white'>
      <div className='max-w-md mx-auto'>
        <ContactIcon className='w-20 h-24 mx-auto mb-6' />
        <p className='text-sm text-[#FFF8DC]/80 mb-6'>
          Enjoy fitting the designer’s tailoring that matches your aura at our store
        </p>
        <Link
          className='inline-block border border-[#d7b46a] bg-[#d7b46a]/10 px-6 py-2 rounded-lg text-[#d7b46a] text-sm hover:bg-[#d7b46a]/20 transition'
          href='/contact'
        >
          Visit Northman Showroom
        </Link>
      </div>
    </section>
  )
}
