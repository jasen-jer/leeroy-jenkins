import React from 'react'
import {Link} from 'react-scroll'

const Splash = () => {
  return (
    <div className="container-splash">

      <div className="container-splash-top">

        <div className="nav-splash">Home |
          <Link
            activeClass="Active"
            to="Mission"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={1000}
            delay={30}
            isDynamic={true}>
            Mission
          </Link>|
          <Link
            activeClass="Active"
            to="About"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={1000}
            delay={30}
            isDynamic={true}>
            About Us</Link>
          |
          <Link
            activeClass="Active"
            to="Projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={1000}
            delay={30}
            isDynamic={true}>
            Project Samples</Link>
          |
          <Link
            activeClass="Active"
            to="Contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={1000}
            delay={30}
            isDynamic={true}>
            Contact</Link>
        </div>

        <h1 className="headline-splash">Griffinpuff</h1>
        <h3 className="tag">The <span className="tag-span">other</span> courageous guys.</h3>
      </div>

      <div className="container-splash-bottom">
        <Link 
          activeClass= "Active"
          to="Contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={20}
          duration={1000}
          delay={30}
          isDynamic={true}>
            <a class="btn">Work with us</a>
        </Link>
        <div>
          <Link
            activeClass="Active"
            to="Mission"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={1000}
            delay={30}
            isDynamic={true}>
            <i className="material-icons btn-splash-scroll">keyboard_arrow_down</i>
          </Link>
        </div>
        

        <div className="bg-splash"></div>
      </div>

    </div>
  )
}

export default Splash