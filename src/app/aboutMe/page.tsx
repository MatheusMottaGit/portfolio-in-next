import React from 'react'
import Timeline from '@/components/Timeline'

const About = () => {
  return (
    <section className='relative w-3/5 h-fit mt-12 rounded-lg animate-slideIn'>
      <span className='absolute bg-profile/60 h-full p-[1px] rounded-full'></span>

      <div className='relative flex flex-col gap-4 left-4 pr-5'>
        <Timeline />
      </div>
    </section>
  )
}

export default About