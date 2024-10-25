'use client'
import React from 'react'

import Spline from '@splinetool/react-spline/next';

// export default function Home() {
//   return (
    
//   );
// }


function AboutPage() {
  return (
    <div className="bg-gray-900 text-white flex justify-start items-center h-screen" id='about'>
        <div>
        <main>
      <Spline
        scene="https://prod.spline.design/MyPzkW-b9mL0SoQr/scene.splinecode" 
      />
    </main>
        </div>
        <div className="w-1/2 p-5">
            <h2 className="text-blue-700 text-3xl font-bold">About Me</h2>
            <p className="mt-5">
            I specialize in Full Stack Web Development and Java Development, with growing expertise in Data Science. Skilled in building web applications using technologies like React, Spring Boot, and Django. Experienced in Java-based backend systems and applying machine learning for data-driven solutions. Always eager to learn and explore new technologies to solve real-world problems.I am continuously learning and excited about the intersection of software engineering and data-driven insights.
            </p>
        </div>
    </div>
  )
}

export default AboutPage