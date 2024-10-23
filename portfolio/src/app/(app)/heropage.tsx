'use client';

import React from 'react'
import mainImage from "@/media/image/portfolioImage.png"
import { FlipWords } from '@/components/ui/flip-words';
import { FloatingNav } from '@/components/ui/floating-navbar';

function Heropage() {
  return (
    <div className='h-auto md:flex justify-center items-center'>
     <FloatingNav navItems={[{name:"Home", link: "/"}]} />
     <div className='md:flex justify-between items-center  gap-10 text-white z-10 p-5'>
        <div className='w-1/2'>
            <h1 className='text-4xl font-bold'>Hello I am <FlipWords words={["Nisahnt Kaushal", "a FullStack Web Developer", "a Java Developer", "a Data Science Enthusiast"]} className='text-blue-700'/></h1>
            <h3 className='mt-5 text-xl'>I am a passionate and driven software developer with a strong foundation in Full Stack Web Development and Java Development, coupled with a growing expertise in Data Science.</h3>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center z-10'>
            <img src={`${mainImage.src}`} alt="mainImage" />
        </div>
     </div>
    </div>
  )
}

export default Heropage