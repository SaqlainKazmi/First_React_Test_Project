import React from 'react'
import ProjectItem from './ProjectItems'
import img1 from '../assets/card-1.jpg'
import img2 from '../assets/card-2.jpg'
import img3 from '../assets/card-3.jpg'
import img4 from '../assets/card-4.jpg'


const Project = () => {

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi ab blanditiis maiores eligendi accusamus esse tempore sapiente atque illo aut fugit
         repellendus nisi eveniet, itaque rem temporibus deserunt eum! Aspernatur.</p>

         <div className='grid sm:grid-cols-2 gap-12'>

          <ProjectItem img={img1} title='Coat 1'/>
          <ProjectItem img={img2} title='Coat 2'/>
          <ProjectItem img={img3} title='Coat 3'/>
          <ProjectItem img={img4} title='Coat 4'/>

         </div>
    </div>
  )
}

export default Project
