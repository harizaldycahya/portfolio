import background from '../assets/contact.jpg'
import {motion} from 'framer-motion'
function Contact() {
   
    return (
        <div className="contact" style={{ backgroundImage: `url(${background})` }}>
            
            <div className="text">
                <h1> Get In Touch
                </h1>
                <p>I'm interested in freelance opportunities. 
                    <br /> However, if you have question or just want to say hi, 
                    don’t hesitate to contact me.
                </p>
                <hr />
                <hr />
                <div className='button'><i class="fa-solid fa-envelope"></i> &nbsp; Email</div>
                <div className='button-outline'>Twitter &nbsp; <i class="fa-brands fa-square-twitter"></i></div>
            </div>
        </div>
    );
  }
  
export default Contact;
  