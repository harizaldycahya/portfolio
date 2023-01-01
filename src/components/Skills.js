import {motion} from 'framer-motion'
function Skills() {
   
    return (
      <div id='skills' class="skills">
            <div class="title">
                <div class="text">
                    <h1>
                        <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Tech</motion.div>&nbsp;
                        <motion.div whileHover={{rotateX:30}} transition={{type:"spring", stiffness:100}} className='animated_word' >Stack</motion.div>
                    </h1>
                    <p>I create fast, interactive and responsive website. I focusing on frontend development <br /> but i also have experience with  fullstack using Laravel and cms like wordpress</p>
                </div>
                {/* <div className="button">Visit My Github</div> */}
            </div>
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
  