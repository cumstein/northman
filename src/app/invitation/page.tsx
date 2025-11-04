import SplashScreen from '@/app/_components/splash-screen'
import LocationMap from '@/shared/widgets/location-map'
import LogoShimmer from '@/shared/widgets/logo-shimmer'
import EventInfo from './_components/event-info'
import InviteActions from './_components/invite-actions'

export default function InvitationPage() {
  return (
    <>
      <SplashScreen />
      <div className='flex flex-col items-center justify-between min-h-screen max-w-xl mx-auto mt-2'>
        <div className='flex flex-col items-center px-6 pt-16 text-center space-y-4'>
          <h1 className='text-xl font-semibold'>مراسم سالگرد نورث‌من</h1>
          <InviteActions />
        </div>
        <div className='flex pb-16 lg:pb-4 justify-center'>
          <LogoShimmer />
        </div>
      </div>

      <div className='container mx-auto px-4 py-10 flex flex-col md:flex-row-reverse'>
        <div className='order-2 md:w-1/2'>
          <LocationMap />
        </div>
        <div className='order-1 md:w-1/2'>
          <EventInfo />
        </div>
      </div>
    </>
  )
}
