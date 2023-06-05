import React from 'react'
import MediaContents from './MediaContents'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const InstagramLink = () => {

  const instagram = 'https://www.instagram.com/o_matheus_motta/'

  return (
    <MediaContents>
      <Link href={'/'} className='bg-base rounded-full h-[150px] w-[200px] flex items-center justify-center'>
        <Instagram size={50}/>
      </Link>

      <div className='bg-base w-full h-[150px] p-4 rounded-xl flex flex-col gap-3'>
        <h1 className='text-2xl font-bold'>Instagram</h1>

        <div className='w-full text-sm flex flex-col gap-1'>
          <span>
            Seguidores: 73
          </span>
          <span>
            Publicações: 11
          </span>
          <span>
            Acessar perfil: <a className='font-bold underline text-blue' href={`${instagram}`}>{instagram}</a>
          </span>
        </div>
      </div>
    </MediaContents>
  )
}

export default InstagramLink