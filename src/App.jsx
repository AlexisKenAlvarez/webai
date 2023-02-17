
import React from 'react'
import Hero from './components/Hero'
import { Parallax } from 'react-scroll-parallax'
import Ecosystem from './components/Ecosystem'
import Nav from './utils/Nav'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <div className='h-auto w-full bg-darker'>
      <div className='bg-transparent h-2 w-2 absolute top-0 left-0' id="home">

      </div>
      <Nav />
      <Hero />
      <Parallax speed={5}>
        <Ecosystem />
      </Parallax>

      <Parallax speed={-3}>
        <Tokenomics />
      </Parallax>


      <Roadmap />
      <FAQ />
      <Footer />


    </div>

  )
}

export default App