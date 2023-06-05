import React from 'react'

import axios from 'axios'
import Image from 'next/image'
import AboutMeDescription from '../../components/profile/AboutMeDescription'

import { profile } from '@/utils/enviroment'
// import { Profile } from '../../types/types'
import { ExternalLink } from 'lucide-react'
import MyLocation from '../location/MyLocation'

const Profile = async () => {

  // const response = await axios.get(profile)
  // const profileData: Profile = response.data

  return (
    <div className='w-3/5 h-[200px] rounded-xl bg-profile flex justify-center gap-4 items-center p-4 mt-6 animate-slideIn'>
      {/* <Image 
        src={profileData.avatar_url} 
        alt=''
        width={165}
        height={115}
        className='rounded-lg'
      /> */}

      <div className='h-full w-full flex flex-col gap-3 bg-base rounded-lg p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-title text-sm'>Matheus Domingues Motta</h1>

          <a className='uppercase flex items-center gap-1 text-blue font-bold text-xs hover:underline' href="https://github.com/MatheusMottaGit">
            github 
            <ExternalLink size={12} className='-mt-0.5'/>
          </a>
        </div>

        <AboutMeDescription />

        <MyLocation />
      </div>
    </div>
  )
}

export default Profile