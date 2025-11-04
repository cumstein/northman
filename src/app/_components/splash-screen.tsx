'use client'

import gsap from 'gsap'
import { useLayoutEffect, useRef, useState } from 'react'
import LogoShimmer from '@/shared/widgets/logo-shimmer'

export default function SplashScreen() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      // ✅ Pre-set all motion states (SSR-safe confirmation)
      gsap.set('.letterbox-top', { scaleY: 1, transformOrigin: 'top center' })
      gsap.set('.letterbox-bottom', { scaleY: 1, transformOrigin: 'bottom center' })
      gsap.set('.splash-logo', { opacity: 0, y: 20, scale: 0.9, willChange: 'transform,opacity' })
      gsap.set('.splash-subtitle', { opacity: 0, y: 10, willChange: 'transform,opacity' })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete: () => setVisible(false),
      })

      // 🎬 Letterbox open
      tl.to('.letterbox-top', { scaleY: 0, duration: 1.4 }, 0)
      tl.to('.letterbox-bottom', { scaleY: 0, duration: 1.4 }, 0)

      // Logo & subtitle fade in
      tl.to('.splash-logo', { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' }, 0.8)
      tl.to('.splash-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1.4)

      // Hold + fade out
      tl.to({}, { duration: 3 })
      tl.to(root, { opacity: 0, duration: 1.2, ease: 'power2.inOut' })
    }, root)

    return () => ctx.revert()
  }, [])

  if (!visible) return null

  return (
    <div
      className='fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#000030] text-center'
      ref={rootRef}
      style={{
        opacity: 1,
        visibility: 'visible',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* Letterbox bars (SSR hidden start state) */}
      <div
        className='letterbox-top absolute top-0 left-0 w-full h-1/2 bg-[#111c27] origin-top'
        style={{ transform: 'scaleY(1)' }}
      />
      <div
        className='letterbox-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#111c27] origin-bottom'
        style={{ transform: 'scaleY(1)' }}
      />

      {/* Logo */}
      <div
        className='relative z-10 splash-logo'
        style={{
          opacity: 0,
          transform: 'translateY(20px) scale(0.9)',
          willChange: 'transform,opacity',
        }}
      >
        <LogoShimmer />
      </div>

      {/* Subtitle */}
      <p
        className='splash-subtitle mt-4 text-sm text-muted-foreground'
        style={{
          opacity: 0,
          transform: 'translateY(10px)',
          willChange: 'transform,opacity',
        }}
      >
        Powered by{' '}
        <span className='font-semibold text-[#f5c842] animate-[glowPulse_3s_ease-in-out_infinite]'>
          CYRAYS
        </span>
      </p>
    </div>
  )
}
