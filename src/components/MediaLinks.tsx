import React from 'react'

import GithubLink from './contents/GithubLink'
import MediaLinksContainer from './containers/MediaLinksContainer'
import InstagramLink from './contents/InstagramLink'
import LinkedinLink from './contents/LinkedinLink'
import ResumeLink from './contents/ResumeLink'

const MediaLinks = () => {

  return (
    <div className='w-full h-full flex flex-col items-center gap-6'>
      <h1 className='text-title font-bold text-3xl'>Acompanhe minha trajetória</h1>

      <div className='w-full grid grid-cols-1 place-items-center gap-4 p-2'>
        <MediaLinksContainer>
          <GithubLink />  
        </MediaLinksContainer>

        <MediaLinksContainer>
          <InstagramLink />  
        </MediaLinksContainer>

        <MediaLinksContainer>
          <LinkedinLink />  
        </MediaLinksContainer>

        <MediaLinksContainer>
          <ResumeLink />  
        </MediaLinksContainer>
      </div>
    </div>
  )
}

export default MediaLinks