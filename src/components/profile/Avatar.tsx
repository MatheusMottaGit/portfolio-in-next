import React from 'react'

import Image from 'next/image'
import { Profile } from '@/types/types'

const Avatar = ({ avatar_url }: Profile) => {
  return (
    <>
      <Image 
        src={avatar_url} 
        alt=''
        width={165}
        height={115}
        className='rounded-lg'
      />
    </>
  )
}

export default Avatar