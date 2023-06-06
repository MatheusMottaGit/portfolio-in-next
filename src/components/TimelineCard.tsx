import { Children } from '@/types/types'
import React from 'react'

const TimelineCard = ({ children }: Children) => {
  return (
    <>
      <div className='bg-profile w-full flex flex-col h-fit items-start rounded-lg p-4'>
        {children}
      </div>
    </>
  )
}

export default TimelineCard