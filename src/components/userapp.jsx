import React,{useState,useEffect,useRef} from "react";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";

import styles from '../css/homepage.module.css';
import ua1 from '../resources/userapp1.png';
function UserApp(){
        const alignCenter = { display: 'flex', alignItems: 'center' }
        const pLayer={width:"auto",marginLeft:"5%",marginRight:"5%",marginTop:"2%"}
    return <div className={styles.userbackground} >
        <Parallax pages={6} style={{overflowY:"scroll",scrollbarWidth:"none"}}>
            <ParallaxLayer style={{...pLayer}} offset={0} sticky={{start:0, end:1}} >
<div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1}></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={1} sticky={{start:1, end:2}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1}></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={2} sticky={{start:2, end:3}} >
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1}></img>
</div>
</div>
                </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={3} sticky={{start:3, end:4}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1}></img>
</div>
</div>
                </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={4} sticky={{start:4, end:5}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1}></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={5} sticky={{start:5, end:6}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc Pharma</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div>
<img src={ua1}></img>
</div>
</div>
            </ParallaxLayer>
        </Parallax>
    </div>
}
export default UserApp;