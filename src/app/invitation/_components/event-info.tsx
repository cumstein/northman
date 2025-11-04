'use client'

import { IconBrandInstagram, IconClock, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'

export default function EventInfo() {
  // links
  const addressUrl = 'https://maps.app.goo.gl/Bvr2tVMtvFpRiarx6'
  const tel = '+981332117566'
  const email = 'info@cyrays.com'
  const instagram = 'https://www.instagram.com/northmanofficial_/'

  const itemCls = 'flex items-center gap-3 p-3'

  return (
    <div className='w-full space-y-3 text-right' dir='rtl'>
      <a
        aria-label='آدرس روی نقشه'
        className={itemCls}
        href={addressUrl}
        rel='noopener noreferrer'
        target='_blank'
      >
        <IconMapPin className='text-[#d7b46a] shrink-0' />
        <div>
          <h3 className='font-semibold'>آدرس</h3>
          <p className='text-muted-foreground'>استان گیلان، رشت، گلسار، بلوار سمیه</p>
        </div>
      </a>

      <a aria-label='تماس تلفنی' className={itemCls} href={`tel:${tel}`}>
        <IconPhone className='text-[#d7b46a] shrink-0' />
        <div>
          <h3 className='font-semibold'>تلفن</h3>
          <p className='text-muted-foreground' dir='ltr'>
            +98 13 3211 7566
          </p>
        </div>
      </a>

      <a aria-label='ارسال ایمیل' className={itemCls} href={`mailto:${email}`}>
        <IconMail className='text-[#d7b46a] shrink-0' />
        <div>
          <h3 className='font-semibold'>ایمیل</h3>
          <p className='text-muted-foreground'>{email}</p>
        </div>
      </a>

      <div className='flex items-center gap-3 rounded-xl p-3'>
        <IconClock className='text-[#d7b46a] shrink-0' />
        <div>
          <h3 className='font-semibold'>زمان رویداد</h3>
          <p className='text-muted-foreground'>شنبه ۱۶ آبان، ساعت ۷ عصر</p>
        </div>
      </div>

      <a
        aria-label='صفحه اینستاگرام'
        className={itemCls}
        href={instagram}
        rel='noopener noreferrer'
        target='_blank'
      >
        <IconBrandInstagram className='text-[#d7b46a] shrink-0' />
        <div>
          <h3 className='font-semibold'>اینستاگرام</h3>
          <p className='text-muted-foreground'>@northmanofficial_</p>
        </div>
      </a>
    </div>
  )
}
