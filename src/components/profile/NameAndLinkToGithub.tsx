import React from 'react'
import { ExternalLink } from 'lucide-react'

const NameAndLinkToGithub = () => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='font-bold text-title text-sm'>Matheus Domingues Motta</h1>

      <a className='uppercase flex items-center gap-1 text-blue font-bold text-xs hover:underline' href="https://github.com/MatheusMottaGit">
        github 
        <ExternalLink size={12} className='-mt-0.5'/>
      </a>
    </div>
  )
}

export default NameAndLinkToGithub