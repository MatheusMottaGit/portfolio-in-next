import React from 'react'

const AboutMe = () => {
  return (
    <section className='w-3/5 mt-12 p-4 flex flex-col items-center gap-3 text-center animate-slideIn'>
      <h1 className='text-xl text-title/80 font-bold ml-3'>Sobre mim</h1>

      <p className='text-text/50 text-sm'>
        Desde sempre gostei da parte visual das coisas, o que até, quando mais novo, fez me 
        interessar pela ilustração e pelo processo de criar e proporcionar experiências às pessoas. Para ser sincero,
        o gosto pela tecnologia e programação veio mais tarde, já adolescente, por recomendação de um amigo, que sempre 
        me falava de forma segura e interessante sobre esse meio, e muito curioso, fui pesquisar sobre e comecei a acompanhar.
        De início, conheci a <a className='font-bold text-blue underline' href="https://www.rocketseat.com.br/">Rocketseat</a>, a 
        maior empresa relacionada à programação da América Latina, que de vez me fez tomar gosto pelo que pra mim, na época, eram
        só linhas de código coloridas. E esse meu gosto pelo visual me levou ao "front-end", parte que lida com o lado do 
        usuário, pelas interações nas páginas, automatização de processos, conceitos de cores em interfaces, etc... E é onde permaneço até então!
      </p>
    </section>
  )
}

export default AboutMe