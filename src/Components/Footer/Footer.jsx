import React from 'react'
import './Footer.css';
import {FaInstagram} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Waleed</a>
      <ul className='pernalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/waleed_gujjar4/"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/muhammad-waleed-software-engineer/"><AiFillLinkedin/></a>
        <a href="https://github.com/waleedgujjar"><FaGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Muhammad Waleed.All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer