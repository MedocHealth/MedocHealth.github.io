import React from "react";
import styles from '../css/homepage.module.css';
import img1 from '../resources//phone medoc.png';
import logo from '../resources/logo-medoc.png';
//import Plx from "react-plx"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'




function HomePage() {
    

    const alignCenter = { display: 'flex', alignItems: 'center' }

    // return <div className={styles.body} >
    //     <div className={styles.parallax1}>
    //         <img src={img1} className={styles.img1}></img>
    //     </div>
                
        return <div>
        <div className={styles.background} >
            <svg className={styles.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,96C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            
            <Parallax pages={4} style={{overflowY:"scroll",scrollbarWidth:"none"}}>  

                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <img src={logo} alt="logo" className={styles.logo}/>
                </ParallaxLayer>

                <ParallaxLayer sticky={{start:1, end:5}} speed={0}>
                    <img src={img1} className={styles.img1}></img>
                </ParallaxLayer>                              

                <ParallaxLayer sticky={{ start: 1, end: 2 }} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
                  
                        <div className={`${styles.card}`}>                            
                            <h1>#betterthanpaper</h1>         
                            <p>Simplifying medical finances and bringing family medicine together by making the healthcare industry 
             more accessible to people from all walks of the country. Medoc aims to be the single destination for all your healthcare needs.</p>                                            
                        </div>                        
                                       
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 3, end: 5 }} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
                    
                <div className={`${styles.card}`}>                            
                            <h1>#cheaperthanpaper</h1>         
                            <p>Simplifying medical finances and bringing family medicine together by making the healthcare industry 
            more accessible to people from all walks of the country. Medoc aims to be the single destination for all your healthcare needs.</p>                                            
                        </div> 

                </ParallaxLayer>
            </Parallax>
        </div>
          <div className={styles.feature}>
        <h1>Feature of MEDOC </h1>
        <h1>Ecosystem</h1>
          </div>
        </div>
      

}
export default HomePage;
