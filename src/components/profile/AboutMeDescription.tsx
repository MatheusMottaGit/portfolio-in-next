import Link from 'next/link'
import React from 'react'

const AboutMeDescription = () => {

  const description = 'Olá, tenho 19 anos e estou atualmente me inserindo na área da progrmação. Há dois anos, tive essa decisão, a qual creio que será carreira definitiva para minha vida. Como programador, atuo no "Front-End" (desenvolvimento voltado ao lado do usuário), com as seguintes linguagens: HTML5, CSS3, JS6, ReactJS, NextJS, TailwindCSS e um pouco de React Native. Espero por meio dessa página, mostrar e registrar minha trajetória no mercado da tecnologia, e focar na minha constante evolução!'

  return (
    <div className='text-text text-justify max-[1558px]:text-sm 2xl:text-text'>
      {description.substring(0, 314).concat('...')}

      {' '}

      <Link href={'/aboutMe'} className='underline font-bold text-blue'>Ver mais</Link>
    </div>
  )
}

export default AboutMeDescription