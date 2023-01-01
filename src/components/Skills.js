import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion'
function Skills() {
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
      <div ref={ref} id='skills' class="skills">
            <motion.div animate={animate} class="title">
                <div class="text">
                    <h1>
                        <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Tech</motion.div>&nbsp;
                        <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Stack</motion.div>
                    </h1>
                    <p>I create fast, interactive and responsive website. I focusing on frontend development <br /> but i also have experience with  fullstack using Laravel and cms like wordpress</p>
                </div>
                {/* <div className="button">Visit My Github</div> */}
            </motion.div>
            <div class="card">
                <i class="fa-brands fa-react"></i>
                <h3>REACT.JS</h3>
            </div>
            <div class="card">
                <i class="fa-brands fa-square-js"></i>
                <h3>JAVASCRIPT</h3>
            </div>
            <div class="card">
                <i class="fa-brands fa-html5"></i>
                <h3>HTML</h3>
            </div>
            <div class="card">
                <i class="fa-brands fa-css3-alt"></i>
                <h3>CSS</h3>
            </div>
        </div>
    );
  }
  
  export default Skills;
  