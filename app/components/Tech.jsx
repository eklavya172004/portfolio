'use client'
import React from 'react'
// import { BallCanvas } from "./canvas"
import { technologies } from "../constants"
import BallCanvas from './canvas/Ball'
import { styles } from '../data/style'
// import  { BallCanvas }  from './canvas'

const Tech = () => {
  return (
    <>
         <h2 className={`${styles.sectionHeadText} mt-25 mb-12`}>
            My Skills
        </h2>
    <div className='flex  flex-row flex-wrap justify-center gap-10'> 
           {technologies.map((tech) => (
               <div className='w-28 h-28 text-amber-50' key={tech.name}>
                <BallCanvas icon={tech.icon} />
            </div>
        ))}
    </div>
        </>
  )
}

export default Tech
