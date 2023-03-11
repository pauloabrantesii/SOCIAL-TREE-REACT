import './styles.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';



import React from 'react';

export function Header() {


    return (
       <div className="container">
         <div className="tree-container">
           <div className="avatar">
              <img src="https://github.com/pauloabrantesii.png" alt="" />
           </div>
           <span className="instagram-user">@paulo_robertoii</span>
           <div className="links">
              <a href="" className="link"> <FaWhatsapp /> Whatsapp </a>
              <a href="" className="link">Youtube</a>
              <a href="" className="link">Email</a>
              <a href="" className="link">Site</a>
           </div>
           <div className="socials-container">
          <a href="" className="social">
          </a>
          <a href="https://www.instagram.com/paulo_robertoii/?igshid=YmMyMTA2M2Y%3D" className="social">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/paulo-roberto-128b5a254/" className="social">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/pauloabrantesii" className="social">
             <FaGithub />
          </a>
        </div>
         </div>
       </div>
    )
    }
  