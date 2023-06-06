import { Children } from '@/types/types'
import React from 'react'

const TimelineCard = ({ children }: Children) => {
  return (
    <>
      <div className='bg-profile w-full flex flex-col h-[150px] items-start rounded-lg p-2'>
        {children}
      </div>
    </>
  )
}

export default TimelineCard