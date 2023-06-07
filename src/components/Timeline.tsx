import React from 'react'
import TimelineCard from './TimelineCard'

const Timeline = () => {
  return (
    <>
      <p className='text-text'> - 2021, dez </p>
      <TimelineCard>
        <div className='w-full max-[1119px]:text-center'>
          <h1 className='text-title/80 font-bold text-xl max-[777px]:text-lg'>Formação como Técnico em Informática</h1>
        </div>
        
        <div className='text-text/50 text-sm text-justify p-3'>
          Nesse ano concluí meu Ensino Médio / Técnico em informática para internet, na Fundação de Apoio à Escola Técnica (FAETEC - VR), aos 18 anos. 
          Este foi um curso com uma grande ênfase em programação, o que me introduziu nessa área e despertou interesse. Dentre as áreas abordadas, me causou maior interesse
          o desenvolvimento "Front-End", já que sempre fui um grande entusiasta da parte visual das coisas.
        </div>
      </TimelineCard>

      <p className='text-text'> - 2022, jan </p>
      <TimelineCard>
        <div className='w-full max-[1119px]:text-center'>
          <h1 className='text-title/80 font-bold text-xl max-[777px]:text-lg'>Um ano de descobertas</h1>
        </div>
        
        <div className='text-text/50 text-sm text-justify p-3'>
          Desde o ano da minha formação até esse ano tive de tomar inúmeras decisões, por insistência própria, para definir de vez
          meus objetivos, afinal não gosto de ficar "parado". Então, o ano de 2022 foi extremamente revelador e determinante para eu ter seguido o caminho da 
          tecnologia e da programação, porque, foi aí que mergulhei de cabeça completamente para estudar e conhecer mais e mais sobre esse mercado.
        </div>
      </TimelineCard>

      <p className='text-text'> - 2023, fev </p>
      <TimelineCard>
        <div className='w-full max-[1119px]:text-center'>
          <h1 className='text-title/80 font-bold text-xl max-[777px]:text-lg'>Mergulhando de cabeça</h1>
        </div>
        
        <div className='text-text/50 text-sm text-justify p-3'>
          Agora em definitivo estou procurando evoluir constantemente na programação, tentando sempre estar por dentro das novas tendências do mercado, 
          desenvolvendo novas aplicações e sempre testando ferramentas. Me aprofundei no "Front-End" ainda mais, procurando estudar, além de sua base (HTML, CSS e JavaScript), 
          tudo que há de mais novo no universo
          do JavaScript, como o ReactJS, NextJS, e ferramentas de Web Design e estilização, como CSS3, TailwindCSS e Styled Components.
        </div>
      </TimelineCard>

      <p className='text-text'> - 2023, mar </p>
      <TimelineCard>
        <div className='w-full max-[1119px]:text-center'>
          <h1 className='text-title/80 font-bold text-xl max-[777px]:text-lg'>Experiências profissionais</h1>
        </div>
        
        <div className='text-text/50 text-sm text-justify p-3'>
         - ( 03 / 2023 - atualmente ): Em março desse ano recebi minha primeira oportunidade de trabalho, atuando
         como freelancer. Nela, fui contatado para contribuir na criação de um aplicativo de celular para 
         a apresentação de um trabalho para o curso de medicina da UNIFAA - Centro Universitário de Valença. Com isso, 
         fui introzido aos conceitos de criação de banco de dados, utilizando NodeJS, e me aprofundei ainda mais no "front-end", 
         agora no universo mobile, utilizando React Native.
        </div>
      </TimelineCard>
    </>
  )
}

export default Timeline