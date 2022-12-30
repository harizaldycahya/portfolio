import image from '../assets/header.png'
import {motion} from 'framer-motion'
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

    return (
        <div class="projects">
            <div class="title">
                <h1>Selected Projects</h1>
                <p>Here are a few past projects I've worked on. Want to see more? <a title='github' href="https://github.com/harizaldycahya">Visit My Github</a></p>
            </div>
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
                        <div class="space20"></div>
                        <a title="project" href="https://github.com/harizaldycahya">See This Project</a>
                        {/* <div className="button">Open Project</div> */}
                    </div>
                </motion.div>
                <motion.img src={image} alt="" />
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
                        <div class="space20"></div>
                        <a title="project" href="https://github.com/harizaldycahya">See This Project</a>
                        {/* <div className="button">Open Project</div> */}
                    </div>
                </motion.div>
                <motion.img src={image} alt="" />
            </motion.div>
        </div>
    );
  }
  
  export default Works;
  