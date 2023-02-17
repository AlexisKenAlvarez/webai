import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TokenData } from '../utils/Data'
import { PieChart, Barchart } from '../charts/Charts'

const Tokenomics = () => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.9 })
    const [data, setData] = useState({
        labels: TokenData.map((data) => data.name),
        datasets: [{
            label: "Tokenomics",
            data: TokenData.map((data) => data.value),
            backgroundColor: [
                '#36a2eb',
                '#ff6384',
                '#ff9f40',
                '#ffcd56',
                '#4bc0c0',
                '#9966ff'

            ]
        }]
    })

    const optionsPie = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            y: {
                ticks: {
                    color: "transparent"
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                align: 'start',
                display: false,
                labels: {
                    color: 'white',

                }
            },
            title: {
                display: true,
                text: 'Pie Chart',
                color: '#FFFFFF',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.parsed} (${(context.parsed / 6).toFixed(2)})%`
                    }
                }
            }

        },
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                    color: "white"
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
                labels: {
                    color: 'white',

                }
            },
            title: {
                display: true,
                text: 'Bar Chart',
                color: '#FFFFFF',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.parsed.x} (${(context.parsed.x / 6).toFixed(2)})%`
                    }
                }
            }

        },
    };

    return (
        <>
            <section className='w-full h-auto bg-tokenbg md:px-20 px-10 pt-28  text-white relative bg-token bg-cover bg-center' id="tokenomics">
                <div className='lg:flex-row flex-col flex items-center justify-between'>
                    <div className='w-full h-auto mx-auto relative z-10'>
                        <h1 className='font-saira md:text-5xl 2xl:text-7xl font-bold text-white text-3xl'>TOKENOMICS</h1>
                        <div className='mt-8 flex flex-col gap-y-4 font-poppins 2xl:text-lg'>
                            <p><span className='text-2xl text-header font-saira font-bold 2xl:text-3xl'>1% </span> Further development of WebAI ecosystem</p>
                            <p><span className='text-2xl text-header font-saira font-bold 2xl:text-3xl'>2% </span> Strategic marketing of WebAI token and ecosystem</p>
                        </div>
                    </div>

                    <div className='w-full h-auto flex items-center lg:justify-center z-10 relative mt-10 lg:mt-0'>

                        <div className='w-fit h-auto font-saira text-7xl 2xl:text-9xl'>
                            <h1 className='text-header font-bold lg:text-center'>3%</h1>
                            <h2 className='text-center mt-2 font-bold text-3xl 2xl:text-4xl opacity-60'>TOTAL TAX</h2>
                        </div>

                    </div>
                </div>


                <motion.img initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 100, y: [120, 0] } : {}} transition={{ duration: 0.7 }} src="/man.webp" alt="man" className=" absolute bottom-0 right-0 z-0 md:block hidden" ref={ref} />
                <img src="/token.webp" alt="token" className=" absolute left-0 w-[35vh] my-auto top-0 bottom-0 ml-2" />

                <section className='w-full h-auto py-20 lg:pb-[2rem] sm:pb-[20rem] pb-[15rem] relative z-10'>


                    <div className='text-left lg:text-lg font-semibold font-saira mb-5 lg:mb-0'>
                        <div className="flex items-center gap-x-2">
                            <div className="w-8 h-3 bg-[#36a2eb]"></div>
                            <p className='text-white'>Seed sale by team</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-8 h-3 bg-[#ff6384]"></div>
                            <p className='text-white'>Fairlunch investors</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-8 h-3 bg-[#ff9f40]"></div>
                            <p className='text-white'>Liquidity pool of $WEBAI token</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-8 h-3 bg-[#ffcd56]"></div>
                            <p className='text-white'>Airdrop/giveaway events</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-8 h-3 bg-[#4bc0c0]"></div>
                            <p className='text-white'>Staking poo</p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-8 h-3 bg-[#9966ff]"></div>
                            <p className='text-white'>CEX/DEX listings</p>
                        </div>

                    </div>


                    <div className='max-h-[25rem] flex items-center justify-between mx-auto lg:flex-row flex-col gap-y-10'>
                        <div className='max-w-[30rem] h-full w-full flex items-center justify-center'>
                            <Barchart data={data} options={options} />
                        </div>
                        <PieChart data={data} options={optionsPie} />
                    </div>
                </section>

            </section>


        </>
    )
}

export default Tokenomics