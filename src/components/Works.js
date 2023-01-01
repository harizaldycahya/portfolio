import image from '../assets/header.png'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion'
function Works() {
   const textMotion = {
    hover: {
        x:0,
        transition: {
          duration: .5,
          type: "tween",
          ease: "easeOut"
        }
      }
   };
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
        <div ref={ref} id='projects' class="projects">
            <motion.div animate={animate} class="title">
                <h1>
                    <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Selected</motion.div>&nbsp;
                    <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Projects</motion.div>
                </h1>
                <p>Here are a few past projects I've worked on. Want to see more? &nbsp;&nbsp; 
                    <a title='github' style={{display:'inline-block'}} href="https://github.com/harizaldycahya">Visit My Github <i class="fa-brands fa-github"></i> </a>
                    </p >
            </motion.div>
            <div className="space5"></div>
            <motion.div whileHover="hover" class="project">
                <motion.div initial={{x:'100vw'}} variants={textMotion} class="project_title">
                    <div class="text">
                        <h3>Beanbag Bengkulu</h3>
                        <hr />
                        <p>Simple small business website with great user interface. 
                            Created with react.js and framermotion, 
                            this website have interactive animation and clean layout.
                            </p>
                        <div className="space5"></div>
                        <a title="project" href="https://github.com/harizaldycahya">See This Project</a>
                        {/* <div className="button">Open Project</div> */}
                    </div>
                </motion.div>
                <motion.img src={image} alt="" />
            </motion.div>
            <div class="project_title_mobile">
                <div class="text">
                    <h3>Beanbag Bengkulu</h3>
                    <p>Simple small business website with great user interface. 
                        Created with react.js and framermotion, 
                        this website have interactive animation and clean layout.
                    </p>
                    <a title="project" href="https://github.com/harizaldycahya">See This Project</a>
                    {/* <div className="button">Open Project</div> */}
                </div>
            </div>
            <div className="space5"></div>
            <motion.div whileHover="hover" class="project">
                <motion.div initial={{x:'100vw'}} variants={textMotion} class="project_title">
                    <div class="text">
                        <h3>Beanbag Bengkulu</h3>
                        <p>Simple small business website with great user interface. 
                            Created with react.js and framermotion, 
                            this website have interactive animation and clean layout.
                            </p>
                        <div class="space5"></div>
                        <a title="project" href="https://github.com/harizaldycahya">See This Project</a>
                        {/* <div className="button">Open Project</div> */}
                    </div>
                </motion.div>
                <motion.img src={image} alt="" />
            </motion.div>
            <div class="project_title_mobile">
                <div class="text">
                    <h3>Beanbag Bengkulu</h3>
                    <p>Simple small business website with great user interface. 
                        Created with react.js and framermotion, 
                        this website have interactive animation and clean layout.
                    </p>
                    <a title="project" href="https://github.com/harizaldycahya">See This Project</a>
                    {/* <div className="button">Open Project</div> */}
                </div>
            </div>
        </div>
    );
  }
  
  export default Works;
  