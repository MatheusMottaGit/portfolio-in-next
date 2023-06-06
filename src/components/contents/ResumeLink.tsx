import React from 'react'
import MediaContents from './MediaContents'
import { NetworkIcon } from 'lucide-react'
import Link from 'next/link'

const ResumeLink = () => {
  return (
    <MediaContents>
      <Link href={'/'} className='bg-base rounded-full h-[160px] w-[200px] flex items-center justify-center'>
        <NetworkIcon size={50}/>
      </Link>

      <div className='bg-base w-full h-[150px] p-4 rounded-xl flex flex-col gap-3 max-[1110px]:items-center'>
        <h1 className='text-2xl font-bold'>Experiências</h1>

        <div className='w-full text-sm flex flex-col gap-1 max-[1110px]:items-center'>
          <span>
            Seguidores:
          </span>
          <span>
            Publicações:
          </span>
          <span>
            Acessar perfil:
          </span>
        </div>
      </div>
    </MediaContents>
  )
}

export default ResumeLink