import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import memoji from "../assets/icons/memoji.png"

export default function Header() {
    return (
           <div className="header-content-wrapper">
            <div className="header__left">
            <p className="header__emoji">👋🏼</p>
                <span className="header__intro--title">Hello, my name is <span className="header__intro--purple">Nusorn,</span></span>
                <p className="header__intro--para">I'm a full stack developer based in Vancouver, BC Canada. I've started my coding journey in March 2020.</p>
                <div className="social-media">
                    <a className="social-media__link" href="https://github.com/nkrachangtoy" tooltip="Github"><FontAwesomeIcon icon={faGithub} size={"2x"}/></a>   
                    <a className="social-media__link" href="https://www.linkedin.com/in/nkrachangtoy/" tooltip="Linkedin"><FontAwesomeIcon icon={faLinkedin} size={"2x"}/></a>     
                </div>
            </div>
            <div className="header__right">
                <img className="header__memoji" src={memoji}  alt="memoji"/>
            </div>
           </div>
    )
}
