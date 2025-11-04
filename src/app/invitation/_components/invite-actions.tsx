import Link from 'next/link'
import { Button } from '@/shared/ui/button'

export default function InviteActions() {
  return (
    <div className='flex flex-col items-center text-center space-y-4 px-4 max-w-xl' dir='rtl'>
      <p className='text-sm md:text-lg leading-10 text-zinc-300 font-medium tracking-tight'>
        یک سال از تولد <span className='font-semibold text-white/90'>نورث‌من</span> گذشته است؛ سالی
        پر از تلاش، یادگیری و خلق زیبایی در کنار شما همراهان همیشگی. اکنون، با افتخار و شادی، شما را
        به مراسم سالگرد برندمان دعوت می‌کنیم تا لحظاتی صمیمی، گرم و الهام‌بخش را در کنار هم تجربه
        کنیم.
        <br />
        حضور شما نه تنها افتخاری‌ست برای ما، بلکه نشانه‌ای‌ست از مسیر مشترکی که با عشق، اعتماد و دوستی
        ساخته‌ایم.
      </p>

      <div className='flex flex-row justify-center items-center gap-4'>
        <Link className='no-underline' href='/'>
          <Button
            className='text-[14px] font-semibold px-6 py-2.5 rounded-full
                       backdrop-blur-sm border border-white/10
                       bg-white/10 hover:bg-white/20 hover:border-white/20
                       text-white shadow-sm hover:shadow-[0_0_18px_rgba(255,255,255,0.1)]
                       transition-all duration-300'
            variant='default'
          >
            مشاهدهٔ سایت
          </Button>
        </Link>

        <Link className='no-underline' href='#'>
          <Button
            className='text-[14px] font-semibold px-6 py-2.5 rounded-full
                       border border-[#f5c842]/40
                       bg-[#f5c842]/10 text-[#f5c842]
                       hover:bg-[#f5c842]/20 hover:border-[#f5c842]/60
                       hover:shadow-[0_0_20px_rgba(245,200,66,0.3)]
                       transition-all duration-300'
            variant='secondary'
          >
            دریافت دعوت‌نامه
          </Button>
        </Link>
      </div>
    </div>
  )
}
