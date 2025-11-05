'use client'
import { useState } from 'react'
import { DOME_IMAGES } from '@/shared/constants/dome-images'
import DomeGallery from './dome-gallery'
import { GallerySort } from './gallery-sort'

export default function Gallery() {
  const [style, setStyle] = useState<'All' | 'classic' | 'slim fit' | 'three piece' | 'tuxedo'>(
    'All',
  )
  const [collection, setCollection] = useState<'All' | 'spring' | 'summer' | 'fall' | 'winter'>(
    'All',
  )

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='md:mt-8 md:mb-16 w-[99vw] h-screen'>
        <DomeGallery images={DOME_IMAGES} selectedCollection={collection} selectedStyle={style} />
      </div>
      <GallerySort
        onChange={(s, c) => {
          setStyle(s)
          setCollection(c)
        }}
        selectedCollection={collection}
        selectedStyle={style}
      />
    </div>
  )
}
