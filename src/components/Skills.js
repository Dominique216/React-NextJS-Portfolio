import React from "react";
import Link from "next/link";

const Skills = () => {
    return(
        <div id="skills" className="-mt-8">
            <h1 id="name" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white pb-8">Skills and Languages</h1>
            <div className="flex flex-col items-center md:flex-row h-fit  md:items-stretch">
                <div className='w-1/2 md:w-1/4 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">Front End</h1>
                    <ul className="text-sky-900 p-3">
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">HTML</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">CSS</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Bootstrap</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Tailwind</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">JavaScript</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">jQuery</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Handlebars</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">React</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Material UI</li>
                    </ul>
                </div>
                <div className='w-1/2  md:w-1/4 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">Back End</h1>
                    <ul className="text-sky-900 p-3">
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Python</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Node</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Express</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">MySQL</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Sequelize</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">MongoDB</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto"> Mongoose</li>
                    </ul>
                </div>
                <div className='w-1/2 md:w-1/4 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">Concepts</h1>
                    <ul className="text-sky-900 text-center p-3">
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-2 my-2 mx-auto">Object Oriented Programing</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-2 my-2 mx-auto">Objec-Relational Mapping</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-2 my-2 mx-auto">Model-View-Controller</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-1 my-2 mx-auto">Progressive web Applications</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-2 my-2 mx-auto">MERN Applications</li>
                    </ul>
                </div>
                <div className='w-1/2  md:w-1/4 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">Other Skills</h1>
                    <ul className="text-sky-900 p-3">
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">GitHub</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Third Part Apis</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Figma</li>
                    <li className="skills-pill text-2xl rounded-full bg-teal-400 w-fit px-5 my-2 mx-auto">Heroku</li>
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default Skills