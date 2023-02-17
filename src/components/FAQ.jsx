import React from 'react'
import Question from '../templates/Question';

const FAQ = () => {
    return (
        <section className='w-full h-auto py-20 px-10 bg-darker text-white'>
            <h1 className='text-center mt-7 font-saira text-5xl font-bold select-none text-white'>FAQ</h1>
            <div className='w-full h-auto mt-10 max-w-[1300px] mx-auto flex flex-col gap-y-4'>

                <Question title="1. Lorem Ipsum?" desc="AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence AI is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible. AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence AI is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible." />

                <Question title="2. Lorem Ipsum?" desc="AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence AI is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible. AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence AI is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible." />

                <Question title="3. Lorem Ipsum?" desc="AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence AI is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible. AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence AI is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible." />

            </div>
        </section>
    )
}

export default FAQ