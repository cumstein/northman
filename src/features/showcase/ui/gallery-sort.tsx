'use client'

import { cn } from '@/shared/utils'

type SortValue = 'All' | 'classic' | 'slim fit' | 'three piece' | 'tuxedo'
type CollectionValue = 'All' | 'spring' | 'summer' | 'fall' | 'winter'

export type GallerySortProps = {
  selectedStyle: SortValue
  selectedCollection: CollectionValue
  onChange: (style: SortValue, collection: CollectionValue) => void
}

export function GallerySort({ selectedStyle, selectedCollection, onChange }: GallerySortProps) {
  const styles: SortValue[] = ['All', 'classic', 'slim fit', 'three piece', 'tuxedo']
  const collections: CollectionValue[] = ['All', 'spring', 'summer', 'fall', 'winter']

  const btnClass = (active: boolean) =>
    cn(
      'px-2 md:px-4 py-2 md:py-4 text-sm uppercase transition-colors duration-200',
      active ? ' text-white' : ' text-[#d7b46a]',
    )

  return (
    <div className='flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-8 py-6 z-20'>
      <div className='flex flex-wrap justify-center'>
        {styles.map((s) => (
          <button
            className={btnClass(selectedStyle === s)}
            key={s}
            onClick={() => onChange(selectedStyle === s ? 'All' : s, selectedCollection)}
            type='button'
          >
            {s}
          </button>
        ))}
      </div>
      <div className='flex flex-wrap justify-center'>
        {collections.map((c) => (
          <button
            className={btnClass(selectedCollection === c)}
            key={c}
            onClick={() => onChange(selectedStyle, selectedCollection === c ? 'All' : c)}
            type='button'
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
