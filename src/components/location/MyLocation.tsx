import { MapPin } from 'lucide-react'
import React from 'react'

const MyLocation = () => {
  return (
    <div className='flex items-center gap-2 text-text/40 text-sm'>
      <MapPin 
        size={15}
        className='-mt-0.5'
      />
      Volta Redonda, Brasil
    </div>
  )
}

export default MyLocation