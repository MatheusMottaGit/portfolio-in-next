import React from 'react'

import axios from 'axios'

import MyLocation from '../location/MyLocation'
import NameAndLinkToGithub from './NameAndLinkToGithub'
import Preview from './Preview'
import Avatar from './Avatar'

import { profile } from '@/utils/enviroment'
import { Profile } from '../../types/types'

const Profile = async () => {

  const response = await axios.get(profile)
  const profileData: Profile = await response.data

  return (
    <div className='w-3/5 h-fit rounded-xl bg-profile flex justify-center gap-4 items-center p-4 mt-6 animate-slideIn max-[1119px]:flex-col'>
      <Avatar 
        avatar_url={profileData.avatar_url} 
        name={''} 
        followers={0} 
        public_repos={0} 
      />

      <div className='h-full w-full flex flex-col gap-3 bg-base rounded-lg p-4'>
        <NameAndLinkToGithub />

        <Preview />

        <MyLocation />
      </div>
    </div>
  )
}

export default Profile