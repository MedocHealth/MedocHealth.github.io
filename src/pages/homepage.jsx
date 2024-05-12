import React from "react";
import styles from '../css/homepage.module.css';
import img1 from '../resources//phone medoc.png';
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
function HomePage() {

    return <div className={styles.body} >
    <svg className={styles.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,96C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
           <div className={styles.parallax1}>
            <img src={img1} className={styles.img1}></img>
     <Parallax  pages={3}>
        <ParallaxLayer  style={{position:"relative",left:"55%",top:"15%"}} speed={3} > <h1>HELLO</h1></ParallaxLayer>
        <ParallaxLayer offset={1} style={{position:"relative",left:"55%",top:"15%"}} speed={3}><h1>HELLO</h1></ParallaxLayer>
        <ParallaxLayer style={{position:"relative",left:"55%",top:"15%"}} speed={3}><h1>HELLO</h1></ParallaxLayer>
     </Parallax>
     
       


    </div>

    </div>




}
export default HomePage;
