import background from '../assets/contact.jpg'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion'
function Contact() {
   // Scroll Animation
    const {ref, inView} = useInView({
        threshold : 0.2
    });
    const animate = useAnimation();
    useEffect(() => {
        if(inView){
            animate.start({
                opacity:1,
                transition: {
                    type: 'spring', 
                    duration: 2,
                    bounce: 0.3 
                }
            });
        }
        if(!inView){
            animate.start({
                opacity:0,
            })
        }
    },[inView])
    // Scroll Animation End
    return (
        <div ref={ref} id='contact' className="contact" style={{ backgroundImage: `url(${background})` }}>
            
            <motion.div animate={animate} className="text">
                <h1>  
                    <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Get</motion.div>&nbsp;
                    <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >In</motion.div>&nbsp;
                    <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Touch</motion.div>
                </h1>
                <p>I'm interested in freelance opportunities. 
                    <br /> However, if you have question or just want to say hi, 
                    don’t hesitate to contact me.
                </p>
                <hr />
                <hr />
                <a style={{textDecoration:'none'}} href="/#contact">
                    <div className='button'><i class="fa-solid fa-envelope"></i> &nbsp; Email</div>
                </a>
                <a style={{textDecoration:'none'}} href="https://twitter.com/messages/compose?recipient_id=1597669013773234176" data-screen-name="@zaldypratama83">
                    <div className='button-outline'>Twitter &nbsp; <i class="fa-brands fa-square-twitter"></i></div>
                </a>
            </motion.div>
        </div>
    );
  }
  
export default Contact;
  