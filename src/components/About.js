import React, { Suspense }from "react";
import Link from "next/link";
// const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Spline from "@splinetool/react-spline";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Bungee_Shade } from "next/font/google";

const bungeeShade = Bungee_Shade({
    subsets: ['latin'],
    weight: '400',
  })

const About = () => {
    console.log("https://prod.spline.design/QFchp2OPhndkQ2cJ/scene.splinecode/scene.json")
    return(
        <div id='about' style={{marginTop: '10vh'}} className='flex flex-col md:flex-row justify-center h-screen p-8 leading-relaxed'>
            <div className='text-white text-center md:text-left w-full md:w-2/3'>
                {/* <span className={bungeeShade.className}></span> */}
                <h1 id="name" className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>Hello, I'm Dominique Nix</h1>
                <p style={{marginBottom:'10vh'}} className="text-lg sm:text-xl md:text-2xl lg:text-3xl">I’m a <span className='text-teal-400'>Full Stack Software Developer</span>. I graduated from UT Austin's Full Stack Coding Certification program. I have experience working with front-end languages and frameworks, back-end languages, databases, building full stack MERN applications, and more.</p>
            </div>
            <div className="flex flex-col items-center">
                <Spline id='avatar' style={{height:'20vh', width:'20vw', transform:'scale(3.5)', zIndex:'0', marginTop: '20%'}} scene="https://prod.spline.design/QFchp2OPhndkQ2cJ/scene.splinecode" /> 
                <ul id='about-icons' className="text-gray-300 text-4xl flex flex-row">
                    <li className="z-10 p-4"><a className="hover:text-teal-400" href='https://www.linkedin.com/in/dominique-nix-152361263/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>                   
                    <li className="z-10 p-4"><a className="hover:text-teal-400" ><FontAwesomeIcon icon={faFilePdf} /></a></li>
                    <li className="z-10 p-4"><a className="hover:text-teal-400" ><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </div>   
        </div>
    )
}

export default About