import Link from 'next/link'
import React from 'react'

const Preview = () => {

  const preview = 'Olá! Tenho 19 anos e por meio desse website, tenho o objetivo de receber a oportunidade  de conhecer o ambiente profissional de desenvolvimento, tanto na parte técnica (programação), quanto na parte das relações interpessoais, e com isso, amadurecer como programador e pessoa. Quero por meio dessa autodivulgação,  me posicionar no mercado e registrar minha trajetória!'

  return (
    <div className='w-full gap-1 text-justify text-text text-xs leading-5'>
      {preview}

      <Link 
        className='text-blue underline font-bold ml-2' 
        href={'/aboutMe'}
      >
        Ver mais
      </Link>
    </div>
  )
}

export default Preview