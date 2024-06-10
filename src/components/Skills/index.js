import './index.scss'
import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from '../AnimateLetters';



const Skills = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      return () => {
        const container = ".tagcloud";
        const texts = [
          "HTML",
          "CSS",
          "SASS",
          "JavaScript",
          "React",
          "Vue",
          "AZURE",
          "NodeJS",
          "AWS",
          "PYTHON",
          "C++",
          "Ansible",
          "GITHUB",
        ];
  
        const options = {
          radius: 350,
          maxSpeed: "fast",
          initSpeed: "fast",
          keep: true,
        };

        TagCloud(container, texts, options);

        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);  
          
          return () => clearTimeout(timeoutId);
      };      
    }, []);

    
  
    return (
      <>

        <div className="text-shpere">
          <span className="tagcloud"></span>
        </div>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['Skills', ' ', 'And', ' ','Experience']}
                idx={15}
                />
                </h1>
            </div>
        </div>

      </>
    );
  };



export default Skills;