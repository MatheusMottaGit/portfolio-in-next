import React from 'react'

import MediaContents from './MediaContents'
import Link from 'next/link'

import { GithubIcon } from 'lucide-react'
import { useFetch } from '@/hooks/useFetch'
import { Profile } from '@/types/types'
import { profile } from '@/utils/enviroment'

const GithubLink = () => {

  const github = 'https://github.com/MatheusMottaGit'

  const { data: profileData } = useFetch<Profile>(profile, 'profile')

  return (
    <MediaContents>
      <Link href='/' className='bg-base rounded-full h-[160px] w-[200px] flex items-center justify-center'>
        <GithubIcon size={50}/>
      </Link>

      <div className='bg-base w-full h-[150px] p-4 rounded-xl flex flex-col gap-3 max-[1110px]:items-center'>
        <h1 className='text-2xl font-bold'>Github</h1>

        <div className='w-fit text-sm flex flex-col gap-1 max-[1110px]:items-center'>
          <span>
            Seguidores: {profileData?.followers}
          </span>
          <span>
            Publicações: {profileData?.public_repos}
          </span>
          <span>
            Acessar perfil: <a className='font-bold underline text-blue' href={`${github}`}>Clique aqui</a>
          </span>
        </div>
      </div>
    </MediaContents>
  )
}

export default GithubLink