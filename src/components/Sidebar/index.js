import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
  
  return(
    <>
    <div className='nav-bar'>
      <nav>
        <NavLink  activeclassname ="active" to = "/"
                  className={({ isActive }) =>
                  isActive ? "active" : ""} end>

          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          to="/about"
          className="about-link"
          activeclassname="active">

          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        {/* <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio" >

          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink> */}
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ayodeji-akinbile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/streaker0"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>


    </div>
    </>
  )
}

export default Sidebar