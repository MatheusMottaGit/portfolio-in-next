import React from 'react'
import TimelineCard from './TimelineCard'

const Timeline = () => {
  return (
    <>
      <p className='text-text'> - 2021, dez </p>
      <TimelineCard>
        <h1 className='text-title/80 font-bold text-xl'>Formação como Técnico em Informática</h1>
        
        <div className='text-text/50 text-sm text-justify p-3'>
          Nesse ano concluí meu Ensino Médio / Técnico em informática para internet, na Fundação de Apoio à Escola Técnica (FAETEC - VR), aos 18 anos. 
          Este foi um curso com uma grande ênfase em programação, o que me introduziu nessa área e despertou interesse. Dentre as áreas abordadas, me causou maior interesse
          o desenvolvimento "Front-End", já que sempre fui um grande entusiasta da parte visual das coisas.
        </div>
      </TimelineCard>

      <p className='text-text'> - 2023, jan </p>
      <TimelineCard>
        <h1 className='text-title/80 font-bold text-xl'>Um ano de descobertas</h1>
        
        <div className='text-text/50 text-sm text-justify p-3'>
          Desde o ano da minha formação até o ano de 2023 tive de tomar inúmeras decisões, por insistência própria, para definir de vez
          meus objetivos, afinal não gosto de ficar "parado". Então, o ano de 2022 foi extremamente revelador e determinante para eu ter seguido o caminho da 
          tecnologia e da programação, porque, foi aí que mergulhei de cabeça completamente para estudar e conhecer mais e mais sobre esse mercado.
        </div>
      </TimelineCard>
    </>
  )
}

export default Timeline