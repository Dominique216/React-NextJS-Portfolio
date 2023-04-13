import React from "react";
import Link from "next/link";

const Skills = () => {
    return(
        <div id="skills" className="-mt-8">
            <h1 id="name" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white pb-8">Skills and Languages</h1>
            <div className="flex flex-col items-center md:flex-row">
                <div className='w-1/2 md:w-1/4 h-80 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1>Front End</h1>
                    <ul>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className='w-1/2  md:w-1/4 h-80 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1>Back End</h1>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className='w-1/2 md:w-1/4 h-80 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1>Concepts</h1>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className='w-1/2  md:w-1/4 h-80 bg-sky-700 m-5 rounded-lg z-10 skills-box'>
                    <h1>Tools</h1>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default Skills