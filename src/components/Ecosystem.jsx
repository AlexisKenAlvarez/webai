import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { Ecoleft, Ecoright } from '../templates/Eco'
import { motion } from 'framer-motion'

const Ecosystem = () => {

    const [ecoRef, ecoView] = useInView({ triggerOnce: true, threshold: 1 })


    return (
        <section className='w-full h-auto min-h-screen bg-darker shadow-eco text-white px-10 pb-[13rem] z-9' >
            <div className="w-full mx-auto max-w-[1700px]" id="ecosystem" >
                <Parallax translateY={[0, -100]}>
                    <div className='max-w-[55rem] 2xl:max-w-[65rem] w-full border-[1px] border-white rounded-xl mx-auto lg:p-12 p-8 pb-20 relative bg-darker'>
                        <h1 className='font-saira text-3xl text-header font-semibold text-center uppercase'>What are we?</h1>
                        <p className='text-center lg:mt-7 mt-5 max-w-[30rem] 2xl:max-w-[35rem] mx-auto text-sm lg:text-md 2xl:text-lg font-poppins'>Web AI is an innovative project that uses Artificial Intelligence &#40;AI&#41; technology to create customized websites from scratch. It utilizes deep learning algorithms and natural language processing &#40;NLP&#41; to analyze user requests and generate attractive, user-friendly websites according to their preferences. With its intuitive design, Web AI simplifies the website creation process and enables users to develop professional-looking websites for any purpose without manual coding.</p>
                        <div className='hidden lg:block'>
                            <img alt="side" src="/sides.webp" className='absolute top-0 bottom-0 my-auto left-0'></img>
                            <img alt="side" src="/sides.webp" className='absolute top-0 bottom-0 my-auto right-0 rotate-180'></img>
                        </div>
                        <button className='bg-transparent border-[1px] border-white px-12 py-3 w-fit h-fit rounded-lg mt-10 hover:bg-white cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto font-medium block hover:text-black'>
                            <p>Whitepaper</p>
                        </button>
                    </div>  
                </Parallax>

                <h1 className='font-saia text-5xl text-center font-bold uppercase mb-[10rem]' ref={ecoRef}>Ecosystem</h1>

                <div className='w-fit h-auto mx-auto mt-10 flex flex-col gap-y-[12rem]'>
                    <Ecoleft title="1. Website AI Generation Tool" desc="Using AI to build websites has many advantages over traditional coding. For example, an AI-based website is capable of providing more personalized experiences for website visitors. Traditional coding requires manual effort and knowledge on coding languages, whereas using AI to create a website makes it easier to develop, customize and deploy a website in much less time with minimal effort and design decisions. Additionally, by utilizing AI models, businesses can use machine learning to modify their websites in order to deliver better suited content or products, as well as gain insights into visitor preferences and behavior patterns." img="1" />
                    <Ecoright title="2. Stacking DApp" desc="Using AI to build websites has many advantages over traditional coding. For example, an AI-based website is capable of providing more personalized experiences for website visitors. Traditional coding requires manual effort and knowledge on coding languages, whereas using AI to create a website makes it easier to develop, customize and deploy a website in much less time with minimal effort and design decisions. Additionally, by utilizing AI models, businesses can use machine learning to modify their websites in order to deliver better suited content or products, as well as gain insights into visitor preferences and behavior patterns." img="2" />
                    <Ecoleft title="3. Whitepaper Generator" desc="WebAI whitepaper generator is a powerful tool designed to help business professionals and entrepreneurs quickly create engaging whitepapers. It allows you to customize your whitepaper in various ways such as choosing from a rich library of professionally-designed templates, editing the text content, and adding images and videos to make it visually appealing. " img="3" />
                    <Ecoright title="3. WebAI Swap" desc="WebAI SWAP is a revolutionary new platform that allows users to convert their WebAI tokens, the native cryptocurrency of $WEBAI, into other popular cryptocurrencies such as Ethereum, Binance Coin and Bitcoin. The tool works by converting the user's WebAI tokens using smart contracts on the blockchain, which are then exchanged for one or more chosen cryptocurrencies. It's easy to use and can be accessed via mobile or desktop." img="4" />
                </div>

            </div>

        </section>
    )
}

export default Ecosystem