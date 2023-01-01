import logo from '../assets/H.png'
import image from '../assets/Photo5.png'
import background from '../assets/img.jpg'
import {motion} from 'framer-motion'
import React, { useState } from "react";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


    return (
      <div id='about' className="header" style={{ backgroundImage: `url(${background})` }}>
            <div id='navbar' class="navbar">
                <div class="logo">
                    <img style={{padding:'1rem'}} src={logo} alt=""/>
                </div>
                <div class="links">
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/#projects"><h3>Projects</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/#skills"><h3>Skills</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/#contact"><h3>Contact</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="https://github.com/harizaldycahya"><h3>Github</h3></motion.a>
                </div>
            </div>
            <motion.div onClick={toggleMenu} whileHover={{x:10}} className="ham">
                <i class="fa-solid fa-bars"></i>
            </motion.div>
            {openMenu ? (
             <motion.div className='ham_items'>
                testing
            </motion.div>
            ) : null}
           
            <div className="hero">
                <div className="text">
                    <motion.h1>
                        <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{stiffness:100, duration: .5, repeat: Infinity,repeatType: "reverse" }}
                         className='animated_word' >Hello,</motion.div> <br />
                        <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{stiffness:100, duration: .6, repeat: Infinity,repeatType: "reverse", delay: 1 }}
                        className='animated_word' >I'm</motion.div>&nbsp;
                        <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{stiffness:100, duration: .7, repeat: Infinity,repeatType: "reverse", delay: 2 }}
                        className='animated_word' >Harizaldy</motion.div>
                    </motion.h1>
                    <p>I'm web developer specializing in frontend using ReactJS.
                        I like to craft interactive website with great user experience.
                    </p>
                    <a style={{textDecoration:'none'}} href="/#contact">
                        <div className='button'>Contact Me</div>
                    </a>
                </div>
                <div className="image">
                    <motion.img
                    animate={{ transform: 'rotate(360deg)' }}
                    transition={{ type:"spring", duration: 5, repeat: Infinity}}
                    src={image} alt=""/>
                </div>
            </div>
      </div>
    );
  }
  
  export default Header;
  