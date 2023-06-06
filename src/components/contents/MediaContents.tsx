import React from 'react'

import { Children } from '@/types/types'

const MediaContents = ({ children }: Children) => {
  return (
    <div className='w-full h-fit rounded-xl flex items-center gap-6 text-text p-4 max-[1152px]:flex-col'>
      {children}
    </div>
  )
}

export default MediaContents