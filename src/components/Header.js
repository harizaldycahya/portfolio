import logo from '../assets/square.jpg'
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
      <div className="header" style={{ backgroundImage: `url(${background})` }}>
            <div id='navbar' class="navbar">
                <div class="logo">
                    <img src={logo} alt=""/>
                </div>
                <div class="links">
                    <a href="/#about"><h3>About</h3></a>
                    <a href="/#skills"><h3>Skills</h3></a>
                    <a href="/#works"><h3>Works</h3></a>
                    <a href="/#contact"><h3>Contact</h3></a>
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
                    <h1>
                        <motion.div whileHover={{rotateX:30}} className='animated_word' >Hello,</motion.div> <br />
                        <motion.div whileHover={{rotateX:30}} className='animated_word' >I'm</motion.div>&nbsp;
                        <motion.div whileHover={{rotateX:30}} className='animated_word' >Harizaldy</motion.div>
                    </h1>
                    <p>I'm web developer specializing in frontend using ReactJS.
                        I like to craft interactive website with great user experience.
                    </p>
                    <div className='button'>Contact Me</div>
                </div>
                <div className="image">
                    <img src={image} alt=""/>
                </div>
            </div>
      </div>
    );
  }
  
  export default Header;
  