import image from '../assets/header.png'
import {motion} from 'framer-motion'
function Works() {
   const textMotion = {
    hover: {
        x:0,
        transition: {
          duration: 0.4,
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
                    <h1></h1>
                    <h3></h3>
                    <hr />
                    <p></p>
                </motion.div>
                <motion.img src={image} alt="" />
            </motion.div>
        </div>
    );
  }
  
  export default Works;
  