import React from 'react'

import { Children } from '@/types/types'

const MediaLinksContainer = ({ children }: Children) => {
  return (
    <div className='w-full bg-post h-fit rounded-xl'>
      {children}
    </div>
  )
}

export default MediaLinksContainer