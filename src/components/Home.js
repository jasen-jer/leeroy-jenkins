import React from 'react'
import Splash from './Splash'
import Mission from './Mission'
import About from './About'
import Projects from './Projects'
import Team from './Team'
import Contact from './Contact'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import Parallax3 from './Parallax3'
import Parallax4 from './Parallax4'
import Parallax5 from './Parallax5'

const Home = () => {
  return (
    <div>

      <Splash />
      <Parallax1 />
      <Mission />
      <Parallax2 />
      <About />
      <Parallax3 />
      <Projects />
      <Parallax4 />
      <Team />
      <Parallax5 />
      <Contact />

      <h5>Footer maybe later.</h5>

      <div className="home-bg" ></div>

    </div>
  )
}

export default Home