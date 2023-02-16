
import React from 'react'
import Hero from './components/Hero'
import { Parallax } from 'react-scroll-parallax'
import Ecosystem from './components/Ecosystem'
import Nav from './utils/Nav'
import Tokenomics from './components/Tokenomics'

const App = () => {
  return (
    <div className='h-auto w-full bg-darker'>
      <Nav />
      <Hero />
      <Parallax speed={5}>
        <Ecosystem />
      </Parallax>
      <Tokenomics />

    </div>

  )
}

export default App