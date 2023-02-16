import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Phase from '../templates/Phase';

const Roadmap = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className='w-full py-20 text-white bg-[center_top_2rem] bg-fit bg-world bg-no-repeat bg-[length:85%] h-auto pb-[10rem]' id="roadmap">
            <h1 className='text-center mt-7 font-saira text-5xl font-bold select-none'>ROADMAP</h1>

            <div className='w-full px-10 mx-auto max-w-[1700px] h-[50vh]'>

                <div className='mx-auto mt-10 max-w-[50rem]'>
                    <Slider {...settings} className="w-full" >
                        <Phase num="01" text={<>
                            1. Creaton of WebAI idea with the main concept <br />

                            2. Development of website, whitepaper and its ecosystem of WebAI <br />

                            3. Seed sale by team of WebAI token <br />

                            4. Start of making socials for WebAI

                        </>} />

                        <Phase num="02" text={<>
                            5. Development of the main ecosystem components <br />

                            6. Competitions and giveaways for community building and engagement <br />

                            7. $WEBAI token fairlaunch <br />

                            8. Launch of $WEBAI

                        </>} />

                        <Phase num="03" text={<>
                            9. Conducting main listings for $WEBAI token <br />

                            10. Partnerships <br />

                            11. Start of listing WEBAI SWAP on CMC

                        </>} />
                    </Slider>

                </div>

            </div>
        </section>
    )
}

export default Roadmap