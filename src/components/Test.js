import square from '../assets/img/square.jpg'
import product from '../assets/img/product.jfif'
import circle_small from '../assets/img/circle.png'
import circle from '../assets/img/circle.png'
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
const Cards1 = () => {
    // Scroll Animation
    const {ref, inView} = useInView({
        threshold : 0.2
    });
    const animate = useAnimation();
    const animate1 = useAnimation();
    useEffect(() => {
        if(inView){
            animate.start({
                x:'-10rem',
                transition: {
                    type: 'spring', 
                    duration: 2,
                    bounce: 0.3 
                }
            });
            animate1.start({
                x:0,
                transition: {
                    type: 'spring', 
                    duration: 2,
                    bounce: 0.3
                }
            });
        }
        if(!inView){
            animate.start({
                x:'-100vw'
            })
            animate1.start({
                x:'100vw',
                transition: {
                    type: 'spring', 
                    duration: 8,
                    bounce: 0.3
                }
            })
        }
    },[inView])
    // Scroll Animation End
    return ( 
        <div className="container">
            <section ref={ref} className="cards-1">
                <div className="text">
                    <h1>Produk <span>Terlaris</span> Kami.
                        <motion.img animate={animate} className='circle_small' src={circle_small} alt=""/> 
                    </h1>
                    <h3>Semua stock ready, bisa langsung di bawa pulang. Yuk buruannn</h3>
                </div>
                <div className="cards">
                    <motion.div whileHover={{rotateX:20}} className="card">
                        <img src={product} alt=""/>
                        <h3>BEANBAG TRIANGLE</h3>
                        <p>Terbuat dari butiran styrofoam sehingga ringan dan memiliki 2 lapisan cover.</p>
                        <p> <span>Rp. 500.000</span> </p>
                    </motion.div>
                    <motion.div whileHover={{rotateX:20}} className="card">
                        <img src={product} alt=""/>
                        <h3>BEANBAG TRIANGLE</h3>
                        <p>Terbuat dari butiran styrofoam sehingga ringan dan memiliki 2 lapisan cover.</p>
                        <p> <span>Rp. 500.000</span> </p>
                    </motion.div>
                    <motion.div whileHover={{rotateX:20}} className="card">
                        <img src={product} alt=""/>
                        <h3>BEANBAG TRIANGLE</h3>
                        <p>Terbuat dari butiran styrofoam sehingga ringan dan memiliki 2 lapisan cover.</p>
                        <p> <span>Rp. 500.000</span> </p>
                    </motion.div>
                    <motion.div whileHover={{rotateX:20}} className="card">
                        <img src={product} alt=""/>
                        <h3>BEANBAG TRIANGLE</h3>
                        <p>Terbuat dari butiran styrofoam sehingga ringan dan memiliki 2 lapisan cover.</p>
                        <p> <span>Rp. 500.000</span> </p>
                    </motion.div>
                    <motion.div whileHover={{rotateX:20}} className="card">
                        <img src={product} alt=""/>
                        <h3>BEANBAG TRIANGLE</h3>
                        <p>Terbuat dari butiran styrofoam sehingga ringan dan memiliki 2 lapisan cover.</p>
                        <p> <span>Rp. 500.000</span> </p>
                    </motion.div>
                    <motion.div whileHover={{rotateX:20}} className="card">
                        <img src={product} alt=""/>
                        <h3>BEANBAG TRIANGLE</h3>
                        <p>Terbuat dari butiran styrofoam sehingga ringan dan memiliki 2 lapisan cover.</p>
                        <p> <span>Rp. 500.000</span> </p>
                    </motion.div>
                </div>
                <motion.img animate={animate1} className='circle' src={circle} alt=""/> 
            </section>
        </div>
     );
}
 
export default Cards1;