'use client'
import React from 'react'
import mainImage from "@/media/image/portfolioImage.jpg"

function Heropage() {
    console.log(mainImage);
    
  return (
    <div className='flex justify-center items-center h-screen'>
     <div className='flex flex-wrap justify-center items-center gap-10'>
        <div className='w-1/2'>
            <h1>Hello I am Nishant Kaushal</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero earum soluta reprehenderit ab neque! Sint itaque porro incidunt odio nobis?</h3>
        </div>
        <div>
            <img src={`${mainImage}`} alt="mainImage" />
        </div>
     </div>
    </div>
  )
}

export default Heropage