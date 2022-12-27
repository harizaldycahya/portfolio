import Header from "../components/Header";
import Skills from "../components/Skills";
import {motion} from 'framer-motion'
function Home() {
    return (
      <div className="Home">
        <Header></Header>

        <motion.div initial={{ x: '-20vw' }}
                    animate={{ x: '20vw' }}
                    transition={{ duration: 10, repeat: Infinity,repeatType: "reverse" }} 
                    className='moving_text'>
            <h1>WEB DEVELOPER. FRONTEND DEVELOPER</h1>
        </motion.div>

        <Skills></Skills>
        <div class="space20"></div>
      </div>
    );
  }
  
  export default Home;
  