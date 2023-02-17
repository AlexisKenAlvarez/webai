import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Nav from '../utils/Nav'
import Typewriter from "typewriter-effect"
import { motion } from 'framer-motion'

const Hero = () => {

    return (
        <>
            <Parallax speed={-50}>
                <section className='w-full h-screen bg-heroblue relative text-white overflow-hidden'>
                    <motion.img initial={{ y: 200, opacity: 0 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1 }} alt="HeroRobot" src="/herobot.webp" className='absolute bottom-0 lg:right-0 h-full z-0 right-[-15rem] opacity-60 min-w-[45rem]'></motion.img>

                    <div className='w-full max-w-[1700px] mx-auto flex items-center h-full lg:px-20 z-10 relative text-center lg:text-left justify-center lg:justify-start'>
                        <div className=''>
                            <motion.h1 initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1 }} className='font-saira lg:text-8xl font-black text-5xl'>WEB AI</motion.h1>
                            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.05 }} className='flex lg:text-3xl text-xl font-bold font-saira gap-x-[7px] mx-auto w-fit lg:mx-0 lg:w-auto min-w-[22rem] items-center justify-center lg:justify-start'>
                                <h2 className=''>The future of</h2>
                                <div className='text-header'>
                                    <Typewriter
                                        options={{
                                            strings: ['web developers.', 'programmers.', 'front-end developers.'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>

                            </motion.div>

                            <motion.p initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.1 }} className='mt-7 xl:max-w-[40rem] lg:max-w-[30rem] max-w-[40rem] font-poppins lg:text-md text-sm px-10 lg:px-0 2xl:text-lg'>AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence 	&#40;AI&#41; is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible.</motion.p>

                            <div className='flex gap-x-3 flex-col lg:flex-row items-center justify-center lg:justify-start gap-y-5'>
                                <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='bg-button px-12 py-3 w-fit h-fit rounded-lg mt-10 hover:bg-[#040B9E] cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium'>
                                    <p>Buy Token</p>
                                </motion.button>

                                <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='border-[1px] border-white px-12 py-3 w-fit h-fit rounded-lg lg:mt-10 hover:bg-white hover:text-black cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium'>
                                    <p>Chart</p>
                                </motion.button>
                            </div>

                        </div>
                    </div>
                </section>
            </Parallax>

        </>



    )
}

export default Hero