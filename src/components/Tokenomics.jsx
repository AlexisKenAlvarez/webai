import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tokenomics = () => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.9})

    return (
        <section className='w-full h-auto bg-tokenbg md:px-20 px-10 py-28 flex items-center justify-between text-white relative lg:flex-row flex-col'>
            <div className='w-full h-auto mx-auto relative z-10'>
                <h1 className='font-saira md:text-5xl 2xl:text-7xl font-bold text-white text-3xl'>TOKENOMICS</h1>
                <div className='mt-8 flex flex-col gap-y-4 font-poppins 2xl:text-lg'>
                    <p><span className='text-2xl text-header font-saira font-bold 2xl:text-3xl'>1% </span> Further development of WebAI ecosystem</p>
                    <p><span className='text-2xl text-header font-saira font-bold 2xl:text-3xl'>2% </span> Strategic marketing of WebAI token and ecosystem</p>
                </div>
            </div>

            <div className='w-full h-auto flex items-center lg:justify-center z-10 relative mt-10 lg:mt-0'>
                <div className='w-fit h-auto font-saira text-7xl 2xl:text-9xl mr-20'>
                    <h1 className='text-header font-bold lg:text-center'>3%</h1>
                    <h2 className='text-center mt-2 font-bold text-3xl 2xl:text-4xl opacity-60'>TOTAL TAX</h2>
                </div>
            </div>

            <motion.img initial={{scale: 0.5, opacity: 0}} animate={ inView ? {scale: 1, opacity: 100, y: [120, 0]} : {}} transition={{duration: 0.7}} src="/man.webp" alt="man" className=" absolute bottom-0 right-0 z-0 md:block hidden" ref={ref} />
            <img src="/token.webp" alt="token" className=" absolute left-0 w-[35vh] my-auto top-0 bottom-0 ml-2" />

        </section>
    )
}

export default Tokenomics