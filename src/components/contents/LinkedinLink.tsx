import React from 'react'
import MediaContents from './MediaContents'
import { LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

const LinkedinLink = () => {

  const linkedin = 'https://www.linkedin.com/in/matheus-domingues-motta-918438257/'

  return (
    <MediaContents>
      <Link href={'/'} className='bg-base rounded-full h-[150px] w-[200px] flex items-center justify-center'>
        <LinkedinIcon size={50}/>
      </Link>

      <div className='bg-base w-full h-[150px] p-4 rounded-xl flex flex-col gap-3'>
        <h1 className='text-2xl font-bold'>Linkedin</h1>

        <div className='w-full text-sm flex flex-col gap-1'>
          <span>
            Seguidores: 10
          </span>
          <span>
            Publicações: 14
          </span>
          <span>
            Acessar perfil: <a className='font-bold underline text-blue' href={`${linkedin}`}>{linkedin}</a>
          </span>
        </div>
      </div>
    </MediaContents>
  )
}

export default LinkedinLink