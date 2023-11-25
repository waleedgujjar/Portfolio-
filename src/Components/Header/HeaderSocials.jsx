import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/muhammad-waleed-software-engineer/" target='__blank'><BsLinkedin/></a>
        <a href="https://github.com/waleedgujjar" target='__blank'><BsGithub/></a>
        <a href="https://www.instagram.com/waleed_gujjar4/" target='__blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials