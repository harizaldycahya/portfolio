import Header from "../components/Header";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";

import {motion} from 'framer-motion'
function Home() {
    return (
      <div className="Home">
        <Header></Header>

        <motion.div initial={{ x: '-20vw' }}
                    animate={{ x: '20vw' }}
                    transition={{ duration: 5, repeat: Infinity,repeatType: "reverse" }} 
                    className='moving_text'>
            <h1>REACT.JS FRONTEND DEVELOPER</h1>
        </motion.div>

        <Works></Works>
        <div class="space20"></div>
        <Skills></Skills>
        <div class="space20"></div>
        <Contact></Contact>
      </div>
    );
  }
  
  export default Home;
  