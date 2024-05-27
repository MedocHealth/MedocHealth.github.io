import React from "react";
import styles from '../css/homepage.module.css';



import HeroSection from "../components/herosection.jsx";
import Feature from "../components/features.jsx";



function HomePage() {
     return <div className={`${styles.homepage}`}>
       <HeroSection></HeroSection>
<Feature></Feature>
       
        </div>
      

}
export default HomePage;
