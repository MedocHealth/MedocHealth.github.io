import React,{useRef,useState,useEffect} from "react";
import styles from '../css/homepage.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import caroData from '../data/caroData';
import f1 from '../resources/feature1.png';
import f2 from '../resources/feature2.png';
import f3 from '../resources/feature3.png';
import f4 from '../resources/feature4.png';
import f5 from '../resources/feature5.png';
import f6 from '../resources/feature6.png';
import f7 from '../resources/feature7.png';
import f8 from '../resources/feature8.png';

function Feature() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

 const parallaxRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const caroData=[f1,f2,f3,f4,f5,f6,f7,f8];

  useEffect(() => {
    const parallax = parallaxRef.current.container.current;
    const handleScroll = () => {
      const scrollPosition = parallax.scrollTop;
      const totalScrollHeight = parallax.scrollHeight - parallax.clientHeight;
      console.log(totalScrollHeight);
      const scrollFraction = scrollPosition / totalScrollHeight;
      const newIndex = Math.floor(scrollFraction * caroData.length);
      setCurrentImageIndex(Math.min(newIndex, caroData.length - 1));
    };

    parallax.addEventListener('scroll', handleScroll);

    return () => {
      parallax.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

    return <div  className={styles.featuresection}>
        
       <Parallax ref={parallaxRef}  pages={8} style={{overflowY:"scroll",scrollbarWidth:"none"}}>
        <ParallaxLayer offset={0} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Bringing Families Together</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={1} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Complete Medical Coverage</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={2} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Most Cost Effective Solution</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={3} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Extremely Device-Friendly</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>User Friendly</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Fitness Tracking</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={6} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>AI-Powered</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={7} sticky={{start:7,end:7}} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Always Improving </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
       </Parallax>
       <div className={styles.featureimage} >
   {caroData.map((item,idx)=>(
     <img className={idx==currentImageIndex?`${styles.imgactive}`:`${styles.imginactive}`} src={item}></img>
   )) }
   {console.log(currentImageIndex)}
     </div>
    </div>
}
export default Feature;


