import React from 'react'
import CarouselComponent from './CarouselComponent'

const Customers = () => {
  return (
    <div className='mx-3'>
        <div className='text-center flex flex-col items-center justify-center text-3xl mb-3'>What customers say about
        <div className='font-bold whitespace-normal'>GREENHIVE?</div></div>
        <div><CarouselComponent/></div>
    </div>
  )
}

export default Customers