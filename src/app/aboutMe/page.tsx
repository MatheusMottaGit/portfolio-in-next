import React from 'react'

import Timeline from '@/components/Timeline'
import TimelineContainer from '@/components/TimelineContainer'
import AboutMe from '@/components/profile/AboutMe'

const About = () => {
  return (
    <>
      <AboutMe />

      <TimelineContainer>
        <div className='relative flex flex-col gap-4 left-4 pr-5'>
          <Timeline />
        </div>
      </TimelineContainer> 
    </>   
  )
}

export default About