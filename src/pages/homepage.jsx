import React,{useEffect, useState,useRef} from "react";
import styles from '../css/homepage.module.css';
import { Parallax,ParallaxLayer } from "@react-spring/parallax";

import img1 from '../resources//phone medoc.png';
import logo from '../resources/logo-medoc.png';

import ua1 from '../resources/userapp1.png';
import f1 from '../resources/feature1.png';
import f2 from '../resources/feature2.png';
import f3 from '../resources/feature3.png';
import f4 from '../resources/feature4.png';
import f5 from '../resources/feature5.png';
import f6 from '../resources/feature6.png';
import f7 from '../resources/feature7.png';
import f8 from '../resources/feature8.png';
import hi1 from '../resources/Available on all devices.png'
import hi2 from '../resources/A Complete Solution.png'
import hi3 from '../resources/Healthcare at your fingertips.png'
import hi4 from '../resources/Modern meets conventional.png'
// import highlight from '../resources/highlighter.svg'



function HomePage() {
    const caroData=[f1,f2,f3,f4,f5,f6,f7,f8];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const alignCenter = { display: 'flex', alignItems: 'center' , justifyContent: 'flex-end'}
      
        const pLayer={width:"auto",marginLeft:"5%",marginRight:"5%"}
        const parallaxRef = useRef();

        useEffect(() => {
            const parallax = parallaxRef.current.container.current;
            const handleScroll = () => {
              
            if(parallax.scrollTop>=4*parallax.clientHeight){

                const scrollPosition = parallax.scrollTop-4*parallax.clientHeight;
                const totalScrollHeight = parallax.clientHeight*8 - parallax.clientHeight;
             
                const scrollFraction = scrollPosition / totalScrollHeight;
              
                const newIndex = Math.floor(scrollFraction * caroData.length);
                setCurrentImageIndex(Math.min(newIndex, caroData.length - 1));

            }
              
            };
        
            parallax.addEventListener('scroll', handleScroll);
        
            return () => {
              parallax.removeEventListener('scroll', handleScroll);
            };
          }, [caroData.length]);
          
     return <div className={styles.herobackground} >
 
    
     <Parallax ref={parallaxRef} pages={20} >  
 {/* <ParallaxLayer offset={0} sticky={{start:0,end:3}} style={{zIndex:"1"}}>
 <svg className={styles.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,96C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
     
 </ParallaxLayer> */}
         <ParallaxLayer offset={0}  style={{ ...alignCenter, justifyContent: 'center',backgroundColor:"#286d8d" }}>
                 <img src={logo} alt="logo" className={styles.logo}/>
                 {/* <svg className={styles.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,96C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
     
         </ParallaxLayer>
 
         <ParallaxLayer sticky={{start:1, end:3}} style={{zIndex:"2"}} >
             <img src={img1} className={styles.img1} alt="#"></img>
             {/* <svg className={styles.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,96C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
     
         </ParallaxLayer>                              
 
         <ParallaxLayer sticky={{ start: 1, end: 2 }} speed={1} style={{ ...alignCenter,backgroundColor:"#286d8d" }}>
           
                 <div className={`${styles.card}`}>                            
                     <h1>#betterthanpaper</h1>         
                     <p>Simplifying medical finances and bringing family medicine together by making the healthcare industry 
      more accessible to people from all walks of the country. Medoc aims to be the single destination for all your healthcare needs.</p>                                            
                 </div>            
                             
                                
         </ParallaxLayer>
 
         <ParallaxLayer sticky={{ start: 3, end: 3 }} speed={1} style={{ ...alignCenter,backgroundColor:"#286d8d" }}>
             
         <div className={`${styles.card}`}>                            
                     <h1>#cheaperthanpaper</h1>         
                     <p>Simplifying medical finances and bringing family medicine together by making the healthcare industry 
     more accessible to people from all walks of the country. Medoc aims to be the single destination for all your healthcare needs.</p>                                            
                 </div> 
 
         </ParallaxLayer>
         <ParallaxLayer offset={4} sticky={{start:4,end:11}}>
          <div className={styles.featureimage} >
   {caroData.map((item,idx)=>(
     <img className={idx===currentImageIndex?`${styles.imgactive}`:`${styles.imginactive}`} src={item} alt="#"></img>
   )) }
  
     </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Bringing Families Together</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Complete Medical Coverage</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={6} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Most Cost Effective Solution</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={7} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Extremely Device-Friendly</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={8} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>User Friendly</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={9} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Fitness Tracking</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={10} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>AI-Powered</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={11}  style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Always Improving </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer style={{...pLayer}} offset={12} sticky={{start:12, end:17}} >
<div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc+ Nursing</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1} alt="#"></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={13} sticky={{start:13, end:17}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>DocAssist</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1} alt="#"></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={14} sticky={{start:14, end:17}} >
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Hospital+</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1} alt="#"></img>
</div>
</div>
                </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={15} sticky={{start:15, end:17}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Card</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1} alt="#"></img>
</div>
</div>
                </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={16} sticky={{start:16, end:17}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc+ Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1} alt="#"></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={17} sticky={{start:17, end:17}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc+ Emergency</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1} alt="asd"></img>
</div>
</div>
            </ParallaxLayer>

            <ParallaxLayer offset={18}> 

            <div className={styles.highlightContainer}>

           {/* <div className={styles.highlightHeading}>
            <h1>Highlight Features</h1>
           </div> */}

           

            <div className={styles.highlightBox}>

                <div className={styles.highlightElement}>
                <h2>Available on ALL devices</h2>
                <div className={styles.pill}>Know More</div>

                <img src={hi1}className={styles.highlightImage} alt="" />

                </div>

                <div className={styles.highlightElement}>
                <h2>Healthcare in Your Finger</h2>
                <div className={styles.pill}>Know More</div>
                <img src={hi2}className={styles.highlightImage} alt="" />
                </div>  

                <div className={styles.highlightElement}>
                <h2>Available on ALL devices</h2>
                <div className={styles.pill}>Know More</div>
                <img src={hi3}className={styles.highlightImage} alt="" />

                </div>

                <div className={styles.highlightElement}>
                <h2>Healthcare in Your Finger</h2>
                <div className={styles.pill}>Know More</div>
                <img src={hi4}className={styles.highlightImage} alt="" />
                </div>                

            </div>
            </div>

            </ParallaxLayer>
            
     </Parallax>
 </div>
      

}
export default HomePage;
