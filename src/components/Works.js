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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quisquam!</p>
            </div>
            <motion.div whileHover="hover" class="project">
                <motion.div initial={{x:'100vw'}} variants={textMotion} class="project_title">
                    <div class="popout_font">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eum.</p>
                        <div className="button">Visit My Github</div>
                    </div>
                </motion.div>
                <motion.img src={image} alt="" />
            </motion.div>
        </div>
    );
  }
  
  export default Works;
  