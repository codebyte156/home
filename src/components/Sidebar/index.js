import React, { useState } from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import logoS from '../../assets/images/logo-r.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose, faGear } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className='logo' to='/home' onClick={() => setShowNav(false)}>
        <img src={logoS} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="Rahul" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact activeClassName="active" to="/home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact activeClassName="active" className="about-link" to="/home/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact activeClassName="active" className="skills-link" to="/home/skills">
          <FontAwesomeIcon icon={faGear} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact activeClassName="active" className="portfolio-link" to="/home/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact activeClassName="active" className="contact-link" to="/home/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a target ="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rahulraut156/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target ="_blank" rel='noreferrer' href='https://github.com/codebyte156/'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target ="_blank" rel='noreferrer' href='https://www.instagram.com/rahul_raut_.007/'>
            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
    </div>
  );
};

export default Sidebar;
