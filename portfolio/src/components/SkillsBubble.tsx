import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tailwindLogo from '@/components/icons/tailwind.png'
import cssLogo from '@/components/icons/css.png'
import djangoLogo from '@/components/icons/django.png'
import expressLogo from '@/components/icons/expressjs.png'
import flaskLogo from '@/components/icons/flask.png'
import gitLogo from '@/components/icons/git.png'
import javaLogo from '@/components/icons/java.png'
import javascriptLogo from '@/components/icons/javascript.png'
import mongodbLogo from '@/components/icons/mongodb.png'
import mysqlLogo from '@/components/icons/mysql.png'
import nodejsLogo from '@/components/icons/nodejs.png'
import pythonLogo from '@/components/icons/python.png'
import reactLogo from '@/components/icons/react.png'
import nextjsLogo from '@/components/icons/nextjsLogo.png'
import reduxLogo from '@/components/icons/reduxLogo.png'
import htmlLogo from '@/components/icons/html.png'
import githubLogo from '@/components/icons/github.png'

// Sample logos - you would replace these with actual image URLs
const skillLogos = [
  `${tailwindLogo.src}`,
  `${htmlLogo.src}`,
  `${cssLogo.src}`,
  `${djangoLogo.src}`,
  `${expressLogo.src}`,
  `${flaskLogo.src}`,
  `${gitLogo.src}`,
  `${githubLogo.src}`,
  `${javaLogo.src}`,
  `${javascriptLogo.src}`,
  `${mongodbLogo.src}`,
  `${mysqlLogo.src}`,
  `${nodejsLogo.src}`,
  `${pythonLogo.src}`,
  `${reactLogo.src}`,
  `${nextjsLogo.src}`,
  `${reduxLogo.src}`
];

// Styled container for the whole section
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
`;

// Container for the bubble grid
const BubbleContainer = styled.div`
  display: grid;
  gap: 20px;
  width: 90%;
  
  /* Responsive grid layout */
  grid-template-columns: repeat(3, 1fr); /* Default for mobile (3 columns) */

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* Tablet (4 columns) */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr); /* Desktop (5 columns) */
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr); /* Large desktop (6 columns) */
  }
`;

// Styled component for each bubble
const Bubble = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #112240;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 50%;
    height: 50%;
  }
`;

function SkillsBubble (){
  return (
    <Section className='bg-gray-900 text-white p-5'>
      <BubbleContainer>
        {skillLogos.map((logo, index) => (
          <Bubble
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0], // Bounce effect
              transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <img src={logo} alt={`Skill logo ${index}`} />
          </Bubble>
        ))}
      </BubbleContainer>
    </Section>
  );
};

export default SkillsBubble;
