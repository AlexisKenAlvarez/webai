import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export const Ecoleft = ({ title, desc, img }) => {

    const [ref, inView] = useInView({ triggerOnce: true, thershold: 1 })

    return (
        <div className='h-auto max-w-[65rem] w-full flex items-center lg:flex-row flex-col'>
            <div className="relative w-full h-[18rem] flex items-center justify-center">
                <Parallax translateY={[35, -35]} className="w-full h-full flex items-center justify-center">
                    <img src={`/${img}.webp`} alt={img} className="object-cover h-full shadow-glow rounded-2xl" />
                </Parallax>
            </div>
            <motion.div className="w-full mt-14 lg:mt-0" ref={ref} initial={{opacity: 0}} animate={ inView ? {opacity: 100} : {}} transition={{duration: 0.7}}>
                <h3 className="text-header font-saira">{title}</h3>
                <p className="font-poppins text-sm md:text-md">{desc}</p>
            </motion.div>
        </div>
    )
}

export const Ecoright = ({ title, desc, img }) => {

    const [ref, inView] = useInView({ triggerOnce: true, thershold: 0.8 })


    return (
        <div className='h-auto max-w-[65rem] w-full flex items-center lg:flex-row flex-col-reverse'>

            <motion.div className="w-full mt-14 lg:mt-0"  ref={ref} initial={{opacity: 0}} animate={ inView ? {opacity: 100} : {}} transition={{duration: 0.7}}>
                <h3 className="text-header font-saira text-right">{title}</h3>
                <p className="font-poppins text-right text-sm md:text-md">{desc}</p>
            </motion.div>
            <div className="relative w-full h-[18rem] flex items-center justify-center">
                <Parallax translateY={[35, -35]} className="w-full h-full flex items-center justify-center">
                    <img src={`/${img}.webp`} alt={img} className="object-cover h-full shadow-glow rounded-2xl" />
                </Parallax>
            </div>
        </div>
    )
}


