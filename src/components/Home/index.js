import { useEffect, useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AnimatedLetters from '../AnimateLetters'
import Logo from '../Logo'
import './index.scss'





const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','R', 'a', 'h', 'u', 'l', ' ', 'R', 'a', 'u', 't' ]

  

  const [text] = useTypewriter({
    words: [' Web Developer', ' Freelancer', ' Cloud Specialist', ' Programmer'],
    loop: {},
    typeSpeed: '120',
  });


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}> I</span>
            <span className={`${letterClass} _14`}>'m </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>

          <h3 style={{margin: '10px', fontWeight: 'normal'}}>

          I'm a 
          <span style={{fontWeight: 'bold', color: 'yellow'}}>
              {text}
          </span>
          <span style={{color: 'yellow'}}>
              <Cursor cursorStyle='|' /> 
          </span>
          </h3>
          
          <h2>Full Stack Developer | Freelancer | Cloud Specialist | Programmer</h2>
          <Link to="/home/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        <Logo />
        <div id="dark"></div>
        
        
      </div>
      
    </>
  )
}

export default Home