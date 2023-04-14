import React from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Carousel from "react-material-ui-carousel";
import ArrowForwardOutlined  from "@mui/icons-material";
import pp1 from '../assets/pp1.png'
import pp2 from '../assets/pp2.png'
import pp3 from '../assets/pp3.png'
import pp4 from '../assets/pp4.png'
import pp5 from '../assets/pp5.png'
import ww1 from '../assets/ww1.png'
import ww2 from '../assets/ww2.png'
import ww3 from '../assets/ww3.png'
import tb1 from '../assets/tb1.png'
import tb2 from '../assets/tb2.png'
import tb3 from '../assets/tb3.png'
import tb4 from '../assets/tb4.png'
import tb5 from '../assets/tb5.png'


const Works = () => {
    const proPairsImages = [
        {
            src: pp1
        }, 
        {
            src: pp2
        },
        {
            src: pp3
        },
        {
            src: pp4
        },
        {
            src: pp5
        }
    ]

    const whichWordImages = [
        {
            src: ww1
        }, 
        {
            src: ww2
        }, 
        {
            src: ww3
        }
    ]

    const techBlogImages = [
        {
            src: tb1
        }, 
        {
            src: tb2
        },
        {
            src: tb3
        },
        {
            src: tb4
        },
        {
            src: tb5
        }
    ]

    return(
        <div id="works" className="h-screen">
            <h1 id="name" className="text-center mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white pb-8">Works</h1>
             <Tab.Group>
                <Tab.List className="bg-gray-900 w-fit text-white text-center rounded-lg p-2 mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
                    <Tab 
                    className="hover:bg-teal-400/75 p-3 rounded-lg focus:bg-teal-400 focus:text-sky-900 focus:outline-1 focus:outline-none active:outline-none mx-1"
                    >ProPairs</Tab>
                    <Tab className="hover:bg-teal-400/75 p-3 rounded-lg focus:bg-teal-400 focus:text-sky-900 focus:outline-none active:outline-none mx-1"
                    >WhichWord</Tab>
                    <Tab className="hover:bg-teal-400/75 p-3 rounded-lg focus:bg-teal-400 focus:text-sky-900 focus:outline-none active:outline-none mx-1"
                    >Tech Blog</Tab>
                </Tab.List>
                <Tab.Panels className="w-5/6 h-fit bg-sky-700 h-96 mx-auto text-center text-white rounded-lg p-4">
                    <Tab.Panel >
                        <div>
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl m-5 proj-title">ProPairs</h1>
                            <p className="w-3/4 mx-auto sm:text-md md:text-lg lg:text-xl">ProPairs is a FullStack MERN application that evaluates users based on their personality type and generates a rating of how well they will work together with one another based on their Myers-Briggs personality type. It was made using React, Material UI, mongoDB, mongoose, node, and express.</p>
                            <Carousel
                            className='w-1/2 mx-auto my-5'>
                            {
                                proPairsImages.map((pic, i) => {
                                    return(
                                        <img  className="carousel-pic" key={i} src={pic.src.src}  />
                                    )
                                })
                            }
                            </Carousel>
                            <button className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded text-sky-900 mx-2">
                                <a>
                                GitHub Repo 
                                </a>
                            </button>
                            <button className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded text-sky-900 mx-2">
                                <a>
                                Visit Website 
                                </a>
                            </button>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                    <img />
                        <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl m-5 proj-title">WhichWord</h1>
                            <p className="w-3/4 mx-auto sm:text-md md:text-lg lg:text-xl">A more user interactive Wordle inspired game that  allows users to choose difficulty level and  play without the 24-hour break. This was created using HTML, CSS, JavaScript, and third party APIs.</p>
                            <Carousel
                            className='w-1/2 mx-auto my-5'>
                            {
                                whichWordImages.map((pic, i) => {
                                    return(
                                        <img  className="carousel-pic" key={i} src={pic.src.src}  />
                                    )
                                })
                            }
                            </Carousel>
                            
                            <button className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded text-sky-900 mx-2 inline">
                                <a className="inline">
                                GitHub Repo 
                                </a>
                            </button>
                            <button className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded text-sky-900 mx-2">
                                <a>
                                Visit Website 
                                </a>
                            </button>
                        </div>
                        <img />
                    </Tab.Panel>
                    <Tab.Panel>
                        <img />
                        <div>
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl m-5 proj-title">Tech Blog</h1>
                            <p className="w-3/4 mx-auto sm:text-md md:text-lg lg:text-xl">A FullStack blog site that requires signup or login. Once logged in, users can view existing posts and comments, add comments, and add, update, or delete their posts. This was made using Node, Express, MySql, Sequelize, Handlebars, and Bootstrap.</p>
                            <Carousel
                            className='w-1/2 mx-auto my-5'>
                            {
                                techBlogImages.map((pic, i) => {
                                    return(
                                        <img  className="carousel-pic" key={i} src={pic.src.src}  />
                                    )
                                })
                            }
                            </Carousel>
                            <button className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded text-sky-900 mx-2">
                                <a>
                                GitHub Repo 
                                </a>
                            </button>
                            <button className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded text-sky-900 mx-2">
                                <a>
                                Visit Website 
                                </a>
                            </button>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Works