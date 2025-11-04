import { Hero } from '@/app/_components/hero'
import SplashScreen from '@/app/_components/splash-screen'
import StageReveal from '@/app/_components/stage-reveal'

import Gallery from '@/features/showcase/ui/gallery'

export default function HomePage() {
  return (
    <main>
      <SplashScreen />
      <Hero />
      <StageReveal />
      <Gallery />
    </main>
  )
}
