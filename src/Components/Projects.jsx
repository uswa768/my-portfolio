import React from 'react'
import tictactoe from "..//assets/tictactoe.png"
import Calculator from "..//assets/calculator.png"
import BMI from "..//assets/BMI.jpeg"
import Quote from "..//assets/Quote app.png"
import enentz from "..//assets/eventz.png"

const projects=[
  {
    id:1,
    title: "TicTacToe",
    technologies:"XML, Java" ,
    image:tictactoe,
  },

  {
    id:2,
    title: "Calculator",
    technologies:"XML, Java",
    image:Calculator,
  },

  {
    id:3,
    title:"BMI",
    technologies:"XML, Java",
    image:BMI,
  },

  {
    id:4,
    title:"Quote App",
    technologies:"XML, Java",
    image:Quote,
  },

  {
    id:5,
    title:"Eventz",
    technologies:"XML, Java, Firebase",
    image:enentz,
  }
]
const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map(projects =>(
               <div key={projects.id} className='bg-gray-500 p-6 rounded-lg hover:shadow-lg transform
               transition-transform duration-300 hover:scale-105'>
                <img className='rounded-lg mb-4 w-full h-48 object-fill' src={projects.image}/>
                <h3 className='text-2xl font-bold mb-2'>{projects.title}</h3>
                <p className=' text-gray-50 mb-4'>{projects.technologies}</p>
               </div>
              ))}
              </div>
        </div>
      
    </div>
  )
}

export default Projects
