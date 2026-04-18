import React from 'react'

const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly web design on Figma",
    },

    {
        id: 2,
        title: "Frontend Development",
        description: "Building Interactive and responsive user interface",
    },

    {
        id: 3,
        title: "Backend Developemnt",
        description: "Developing Server-Side logic and database",
    },

    {
        id: 4,
        title: "Full-Stack Development",
        description: "Combining Both Frontend and Backend development skills ",
    },

    {
        id: 5,
        title: "Content Writing",
        description: "Writing Content for your Bussiness and companies"
    },

    {
        id: 6,
        title: "Digital Marketing",
        description: "Promote your business with our digital marketing skills"
    },
]

const Services = () => {
    return (
        <div className='bg-black text-white py-20' id="Service">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 '>
                    Services
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(services => (
                        <div key={services.id}
                            className="bg-gray-800 px-6 pb-6 rounded-lg hover:shdow-lg transform transition-transform duration-300
                            hover:scale-105">
                            <div className="text-right text-2x1 pt-2 font-bold text-transparent bg-clip-text bg-linear-to-r from-green-500 to-blue-400">
                                {services.id}
                            </div>
                            <h3 className="text-left text-2x1 font-bold text-transparent bg-clip-text bg-linear-to-r from-green-500 to-blue-400">
                                {services.title}
                            </h3>
                            <p className='mt-2 text-gray-300 ' >{services.description}</p>
                            <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
