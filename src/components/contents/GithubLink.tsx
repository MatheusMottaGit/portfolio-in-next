import React from 'react'
import MediaContents from './MediaContents'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

const GithubLink = () => {

  const github = 'https://github.com/MatheusMottaGit'

  return (
    <MediaContents>
      <Link href='/' className='bg-base rounded-full h-[150px] w-[200px] flex items-center justify-center'>
        <GithubIcon size={50}/>
      </Link>

      <div className='bg-base w-full h-[150px] p-4 rounded-xl flex flex-col gap-3'>
        <h1 className='text-2xl font-bold'>Github</h1>

        <div className='w-full text-sm flex flex-col gap-1'>
          <span>
            Seguidores:
          </span>
          <span>
            Publicações:
          </span>
          <span>
            Acessar perfil: <a className='font-bold underline text-blue' href={`${github}`}>{github}</a>
          </span>
        </div>
      </div>
    </MediaContents>
  )
}

export default GithubLink