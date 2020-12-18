import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="main-content">
           {/* <div className="header-bar"></div> */}
           <div className="header-content-wrapper">
            <p className="header__emoji">👋🏼</p>
            <span className="header__intro--title">Hello, my name is <span className="header__intro--purple">Nusorn,</span></span>
            <p className="header__intro--para">a full stack developer based in Vancouver, BC Canada. I've started my coding journey in March 2019. I'm as inspiring developer.</p>
                <div className="social-media">
                    <a className="social-media__link" href="https://github.com/nkrachangtoy" tooltip="Github">Github</a>   
                    <a className="social-media__link" href="https://www.linkedin.com/in/nkrachangtoy/" tooltip="Linkedin">Linkedin</a>   
                    <a className="social-media__link" href="milto:nkrachagtoy@gmail.com" tooltip="Email"><FontAwesomeIcon icon={faEnvelope}/></a>   
                </div>
           </div>
           <div className="projects">
               <h1 className="projects__title">Projects</h1>
               <div className="projects__card">
                   
               </div>
           </div>
        </div>
    )
}
