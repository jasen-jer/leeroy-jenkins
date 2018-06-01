import React from 'react'
import Splash from './Splash'
import Mission from './Mission'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import Parallax3 from './Parallax3'
import Parallax4 from './Parallax4'
import { Element} from 'react-scroll'

const Home = () => {
  return (
    <div>

      <Splash />
      <Parallax1 />
      <Element name="Mission">
      <Mission />
      </Element>
      <Parallax2 />
      <Element name="About">
      <About />
      </Element>
      <Parallax3 />
      <Element name="Projects">
      <Projects />
      </Element>
      <Parallax4 />
      <Element name="Contact">
      <Contact />
      </Element>

      <h5>Footer maybe later.</h5>

      <div className="home-bg" ></div>

    </div>
  )
}

export default Home