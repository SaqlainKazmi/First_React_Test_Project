import React from 'react'
import Workitem from './WorkItem'

const data = [
{
    year: 2020,
    title: 'Content Creator',
    duration: '3 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aperiam consectetur consequuntur nulla iusto ipsa odio, tenetur quaerat odit eligendi molestiae maxime, laudantium aspernatur perferendis veritatis accusantium laborum? Quisquam, animi.'
},
{
    year: 2015,
    title: 'Google',
    duration: '4 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aperiam consectetur consequuntur nulla iusto ipsa odio, tenetur quaerat odit eligendi molestiae maxime, laudantium aspernatur perferendis veritatis accusantium laborum? Quisquam, animi.'
},
{
    year: 20170,
    title: 'Amazon',
    duration: '2 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aperiam consectetur consequuntur nulla iusto ipsa odio, tenetur quaerat odit eligendi molestiae maxime, laudantium aspernatur perferendis veritatis accusantium laborum? Quisquam, animi.'
},
{
    year: 2010,
    title: 'Facebook',
    duration: '5 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aperiam consectetur consequuntur nulla iusto ipsa odio, tenetur quaerat odit eligendi molestiae maxime, laudantium aspernatur perferendis veritatis accusantium laborum? Quisquam, animi.'
},

]

 const Work = () => {

  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>

    {data.map((item, idx )=>(
        <Workitem 
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}  
        />

    ))}
        
    </div>
  )
}

export default Work
