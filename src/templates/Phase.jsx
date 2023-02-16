import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Phase = ({ num, text }) => {

    const [ref, inView] = useInView({ threshold: 0.5 })

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { scale: 1, opacity: 100 } : {}} transition={{ duration: 0.5 }} className='h-auto max-w-[26rem] relative border-l-[5px] border-header p-7 py-8 m-3 min-h-[26rem]'>
            <div className='w-full h-full bg-black opacity-70 absolute top-0 left-0 z-0' ref={ref}>
            </div>
            <div className='relative z-10'>
                <h1 className='text-white font-saira text-2xl font-bold'>Phase {num}</h1>
                <p className='leading-8 mt-10 font-poppins'>
                    {text}
                </p>
            </div>
        </motion.div>
    )
}

export default Phase