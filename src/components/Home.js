import React from 'react'
import Splash from './Splash'
import Mission from './Mission'
import About from './About'
import Projects from './Projects'
import Team from './Team'
import Contact from './Contact'
import Parallax1 from './parallax/Parallax1'
// import Parallax2 from './parallax/Parallax2'
// import Parallax3 from './parallax/Parallax3'
// import Parallax4 from './parallax/Parallax4'
// import Parallax5 from './parallax/Parallax5'
import { Element} from 'react-scroll'

const Home = () => {
  return (
    <div>

      <Splash />
      <Parallax1 />
      <Element name="Mission">
      <Mission />
      </Element>
      <Parallax1 />
      <Element name="About">
      <About />
      </Element>
      <Parallax1 />
      <Element name="Projects">
      <Projects />
      </Element>
      <Parallax1 />
      <Team />
      <Parallax1 />
      <Element name="Contact">
      <Contact />
      </Element>

      <div className="home-bg" ></div>

    </div>
  )
}

export default Home