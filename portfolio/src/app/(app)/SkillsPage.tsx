'use client'
import React from 'react'
import SkillsBubble from '@/components/SkillsBubble'

function SkillsPage() {
  return (
    <div className='bg-gray-900 text-white p-5' id='skills'>
        <div>
            <h2 className='text-blue-700 text-3xl font-bold'>Skills</h2>
            <div>
                <SkillsBubble />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mt-5">
                <ul>
                    <h3 className='text-xl text-blue-700 mb-2 font-semibold'>FrontEnd</h3>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>Redux</li>
                    <li>Tailwind</li>
                </ul>
                <ul>
                    <h3 className='text-xl text-blue-700 mb-2 font-semibold'>BackEnd</h3>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>SpringBoot</li>
                    <li>Django</li>
                    <li>Flask</li>
                </ul>
                <ul>
                    <h3 className='text-xl text-blue-700 mb-2 font-semibold'>Language Known</h3>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>Python</li>
                </ul>
                <ul>
                    <h3 className='text-xl text-blue-700 mb-2 font-semibold'>Database Management</h3>
                    <li>MongoDb</li>
                    <li>MySQL</li>
                </ul>
                <ul>
                    <h3 className='text-xl text-blue-700 mb-2 font-semibold'>Version control</h3>
                    <li>Git</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SkillsPage