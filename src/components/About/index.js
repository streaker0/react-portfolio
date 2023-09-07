import './index.scss'
import {
  faAngular,
  faGitAlt,
  faJsSquare,
  faReact,
  faDocker,
  faJava
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function About(){
  return(
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>About Me</h1>
        <p>
            I'm a very ambitious full-stack developer with a love of problem solving, looking for a role in a
            company that values the energy and passion I bring with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            As a full-stack develeoper, I excel in utilizing front-end technologies such as HTML, CSS, 
            and JavaScript, harnessing the power of frameworks like React or Angular to craft highly 
            responsive user interfaces. On the back-end, I demonstrate proficiency in server-side languages 
            like .Net, Java, or Node.js, and I possess in-depth knowledge of various databases, ensuring 
            data security and optimizing efficiency. 
          </p>
          <p>
            Additionally, I frequently adopt DevOps practices to 
            facilitate automated deployment and continuous integration, utilizing tools such as AWS and 
            Docker to streamline the development pipeline.
          </p>
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#f89820" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#1D63ED" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

    </div>
  )
}

export default About