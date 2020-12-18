import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
           <span className="footer__header">Let's work together!</span>
           <a className="footer__link" href="mailto: nkrachangtoy@gmail.com"><FontAwesomeIcon icon={faEnvelope} />Get in touch</a>
           </div>
        </div>
    )
}
