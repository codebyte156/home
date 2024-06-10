
import { useEffect, useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSwift,
  faNode,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../AnimateLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Full Stack Developer, looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. 
          </p>
          <p align="LEFT">
            I have great Communication and Problem Solving skills along with an 
            experience of Freelancing, TeamWork and managing Esports servers.
          </p>
          <p>
            If I need to define myself in one sentence that would be "A Kind Person,
            who loves his family, and will do anything for them. I also love Dogs, am
            an expert Swimmer and a Tech Enthusiast. I love spending my time learning
            new coding languages and making projects that will make this world a better
            place to live."
          </p>
        </div>

        <div className="stage-cube-cont">
          <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSwift} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About















