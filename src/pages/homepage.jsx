import React,{useEffect, useState,useRef} from "react";
import styles from '../css/homepage.module.css';
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import MenuIcon from '@mui/icons-material/Menu';



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
import { display } from "@mui/system";
// import highlight from '../resources/highlighter.svg'
import corridor from '../resources/Hospital Corridor Photos and Images _ Shutterstock.png'
import bt from '../resources/image-05-removebg-preview.png'
import playbutton from '../resources/googleplay-grey.png'
import fPlayButton from '../resources/googleplay-black.png';
import { Drawer, IconButton } from "@mui/material";
import { drawerList } from "./drawerlist";


function HomePage() {
  
    const caroData=[f1,f2,f3,f4,f5,f6,f7,f8];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const alignCenter = { display: 'flex', alignItems: 'center' , justifyContent: 'flex-end'}
      const [gridHeight,setHeight]=useState("125vh");
        const pLayer={width:"auto",marginLeft:"5%",marginRight:"5%"}
        const parallaxRef = useRef();
        const [scrolled, setScrolled] = useState(false);
           
        const [sidebarOpen,setSideBarOpen]=useState(false)

        const handleSidebarClose=()=>setSideBarOpen(false)
        const handleSidebarOpen=()=>setSideBarOpen(true) 

        useEffect(() => {
            const parallax = parallaxRef.current.container.current;
            const handleScroll = () => {
              
             if(parallax.scrollTop>0){
            
              setScrolled(true)
             } else if(parallax.scrollTop==0){
           
              setScrolled(false)
             }
            if(parallax.scrollTop>=2*parallax.clientHeight){

                const scrollPosition = parallax.scrollTop-2*parallax.clientHeight;
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
          }, [caroData.length,scrolled]);
          



     


     return <div className={styles.herobackground} >
 
    
     <Parallax ref={parallaxRef} pages={19.6} >  

         <ParallaxLayer offset={0} sticky={{start:0,end:18}} style={{justifyContent:"center",zIndex:"3",height:"5vh"}}> 

         {scrolled==false?<nav className={styles.navbarWhite}>
    
          <div className={styles.navright}>
            <div className={styles.navbuttonWhite}>
              Home
            </div>
                 <div className={styles.navbuttonWhite}  >
              Features
            </div>
                 <div className={styles.navbuttonWhite}>
              Ecosystem
            </div>
                 <div className={styles.navbuttonWhite}>
              FAQs
            </div>
                 <div className={styles.navbuttonWhite}>
              Blog
            </div>
                 <div className={styles.navbuttonWhite}>
              Contact 
            </div>
          </div>
          
    </nav>:
    <div>
      <MenuIcon onClick={handleSidebarOpen} style={{padding:"1.5%",transition:"ease-in-out 1s"}}></MenuIcon>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose} sx={{backgroundColor:"rgba(255, 255, 255, 0.5)"}}>
        {drawerList("left")}
    </Drawer>

      </div>}


         </ParallaxLayer>
 
         <ParallaxLayer  sticky={{start:0, end:1}} style={{zIndex:"2"}} >
             <img src={img1} className={styles.img1} alt="#"></img>
             
         </ParallaxLayer>                              
 
         <ParallaxLayer  style={{ ...alignCenter,backgroundColor:"#286d8d" }}>
           
                 <div className={`${styles.card}`}>                            
                     <h1>#betterthanpaper</h1>         
                     <p>Simplifying medical finances and bringing family medicine together by making the healthcare industry 
      more accessible to people from all walks of the country. Medoc aims to be the single destination for all your healthcare needs.</p>                                            
                 </div>            
                             
                                
         </ParallaxLayer>
 
         <ParallaxLayer sticky={{ start: 1, end: 1}} style={{ ...alignCenter,backgroundColor:"#286d8d" }}>
             
         <div className={`${styles.card}`}>                            
                     <h1>#cheaperthanpaper</h1>         
                     <p>Simplifying medical finances and bringing family medicine together by making the healthcare industry 
     more accessible to people from all walks of the country. Medoc aims to be the single destination for all your healthcare needs.</p>                                            
                 </div> 
 
         </ParallaxLayer>
         <ParallaxLayer offset={2} sticky={{start:2,end:9}}>
          <div className={styles.featureimage} >
   {caroData.map((item,idx)=>(
     <img className={idx===currentImageIndex?`${styles.imgactive}`:`${styles.imginactive}`} src={item} alt="#"></img>
   )) }
  
     </div>
        </ParallaxLayer>
        <ParallaxLayer  offset={2} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Bringing Families Together</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={3} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Complete Medical Coverage</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Most Cost Effective Solution</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Extremely Device-Friendly</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={6} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>User Friendly</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={7} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Fitness Tracking</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={8} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>AI-Powered</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={9}  style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Always Improving </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer style={{...pLayer}} offset={10} sticky={{start:10, end:15}} >
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
            <ParallaxLayer style={{...pLayer}} offset={11} sticky={{start:11, end:15}}>
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
            <ParallaxLayer style={{...pLayer}} offset={12} sticky={{start:12, end:15}} >
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
            <ParallaxLayer style={{...pLayer}} offset={13} sticky={{start:13, end:15}}>
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
            <ParallaxLayer style={{...pLayer}} offset={14} sticky={{start:14, end:15}}>
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
            <ParallaxLayer style={{...pLayer}} offset={15} sticky={{start:15, end:15}}>
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
   
            <ParallaxLayer offset={16}  style={{zIndex:"1",backgroundColor:"white"}}> 

            <div className={styles.highlightContainer} >


           

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

                {/* <div className={styles.highlightElement}>
                <h2>Available on ALL devices</h2>
                <div className={styles.pill}>Know More</div>
                <img src={hi3}className={styles.highlightImage} alt="" />

                </div>

                <div className={styles.highlightElement}>
                <h2>Healthcare in Your Finger</h2>
                <div className={styles.pill}>Know More</div>
                <img src={hi4}className={styles.highlightImage} alt="" />
                </div>                 */}

            </div>
            </div>

            </ParallaxLayer>

            <ParallaxLayer  offset={17}sticky={{start:16, end:18}} style={{zIndex:"-2"}} >
             
              <div className={styles.corridordiv}>              
              </div>              
            </ParallaxLayer>

            <ParallaxLayer offset={17} style={{zIndex:"1"}}>
              <div className={styles.bt}>
                <img src={bt} className={styles.btImg} alt="" />
                <h1>It’s perfect time to join the Medoc Ecosystem.</h1>
                <p>Own your health and Life.</p>
                <img src={playbutton} className={styles.playbutton} alt="" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={18}  style={{backgroundColor:"red",zIndex:"4"}}>
<div className={styles.contactus}>
  <h1>Looking for Support?</h1>
  <p>Got a Question? We'd love to hear from you. Send us a message and we will respond you as soon as possible</p>
  <div className={styles.contactform}>
    <div className={styles.formrow1}>
      <input type="text" placeholder="Your Name*"></input>
      <input type="text" placeholder="Your Email*"></input>
      </div>
      <div className={styles.formrow2}>

      <input placeholder="This question is about"></input>
      </div>
      <div className={styles.formrow3}>

      <input placeholder="Your message..." type="text"></input>
      </div>
      <div className={styles.formbutton}>Send your message</div>
      

  </div>
</div>

            </ParallaxLayer>
            <ParallaxLayer offset={19}>
            <div className={styles.footer}>

            <div className={styles.footerflex}>
                <div className={styles.footercontb}>  
                  <img src={logo} className={styles.footermedoc}></img>
                  <p>The complete healthcare ecosystem building towards better accessibility to healthcare and supporting you with medical finances and family medicine.</p>
                </div>
                <div className={styles.footerconts}>
                  <h1>Usefull Links</h1>
                  <p>How it Works?</p>
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                  <p>Site Map</p>
                </div>
                <div className={styles.footerconts}>
                  <h1>Support</h1>
                  <p>FAQs</p>
                  <p>Editor Help</p>
                  <p>Life   Chatting</p>
                  <p>Contact Us</p>
                </div>
                <div className={styles.footercontm}>
                <img src={fPlayButton} className={styles.footerplaybutton} alt="" />
                </div>
              </div>
                <h6 >2022 All right reserved</h6>
            </div>
            </ParallaxLayer>
       
            
    
     </Parallax>
 </div>
      

}
export default HomePage;



