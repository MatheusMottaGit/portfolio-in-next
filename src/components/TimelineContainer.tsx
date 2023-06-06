import { Children } from '@/types/types'
import React from 'react'

const TimelineContainer = ({ children }: Children) => {
  return (
    <section className='relative w-3/5 h-fit mt-12 mb-3 rounded-lg animate-slideIn'>
      <span className='absolute bg-profile/90 h-full p-[1px] rounded-full'></span>

      {children}
    </section>
  )
}

export default TimelineContainer