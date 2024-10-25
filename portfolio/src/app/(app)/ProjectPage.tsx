'use client'
import React from 'react'
import { FocusCards } from '@/components/ui/focus-cards'
import truefeedbackImage from '@/media/image/truefeedback.png'
import todoAppImage from '@/media/image/todoapp.png'
import tweetAppImage from '@/media/image/tweetAppImage.png'
import { cardData } from '@/data/cardData'

function ProjectPage() {
  return (
    <div className='bg-gray-900 text-white p-5' id='projects'>
      <div className='p-5'>
        <h1 className='text-4xl font-bold text-blue-700 mb-5'>Projects</h1>
        <FocusCards cards={[cardData.map((card) => card)][0]} />
      </div>
    </div>
  )
}

export default ProjectPage