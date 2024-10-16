import React from 'react'
import AboutCards from './AboutCards'
import { AboutStuff } from '@/Data/about'
import { AboutCardsProps } from '@/Props/Props'

const About = () => {
  return (
    <div className='flex flex-col items-center gap-3 mx-3'>
        <div className='font-bold text-3xl'>About us</div>
        <div className='text-center'>Order now and appreciate the beauty of nature</div>
        <div className='flex flex-col md:flex-row gap-14 justify-center w-fit'>
            {AboutStuff.map((card, index)=>{
                return <AboutCards key={index} title={card.title} description={card.description} icon={card.icon} />
            })}
            
            
        </div>
    </div>
  )
}

export default About