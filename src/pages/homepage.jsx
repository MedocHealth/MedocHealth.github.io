import React,{useEffect, useState,useRef} from "react";
import styles from '../css/homepage.module.css';
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import MenuIcon from '@mui/icons-material/Menu';


import img1 from '../resources//phone medoc.png';
import logo from '../resources/logo-medoc.png';

import ua1 from '../resources/userapp1.png';
import ua2 from '../resources/docassist.png';
import ua3 from '../resources/Patient_Management.png'
import ua4 from '../resources/medoccard.png'
import ua5 from '../resources/medoc+pharmaphoto.png'
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
import medoclogoblack from '../resources/medoc-black.png';
import { Link } from "react-router-dom";

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
 
    
     <Parallax ref={parallaxRef} pages={18.6} >  

         <ParallaxLayer offset={0} sticky={{start:0,end:18}} style={{justifyContent:"center",zIndex:"3",height:"5vh"}}> 

         {scrolled==false?<nav className={styles.navbarWhite}>
    
          <div className={styles.navright}>
            <Link className={styles.navbuttonWhite}>
              Home
            </Link>
                 <Link className={styles.navbuttonWhite}  >
              Features
            </Link>
                 <Link className={styles.navbuttonWhite}>
              Ecosystem
            </Link>
                
              <Link to="/faq" className={styles.navbuttonWhite} >FAQs</Link>
            
                 <Link className={styles.navbuttonWhite}>
              Blog
            </Link>
                 <Link className={styles.navbuttonWhite}>
              Contact Us
            </Link>
          </div>
          
    </nav>:
<div>
      <MenuIcon onClick={handleSidebarOpen} style={{marginLeft:"1%",marginTop:"1%",color:"black"}}></MenuIcon>
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
    <p>Family Connect-We understand that your family is of core importance to you. Hence, Medoc Health makes it easier for 
you to connect to your family real-time, no matter how far you are. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={3} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Complete Medical Coverage</h1>
    <p>Medoc ensures comprehensive medical coverage, offering seamless access to a wide range of services including preventive care, specialist consultations, and emergency treatment </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Most Cost Effective Solution</h1>
    <p> Medoc is free to use for the end-user and is priced at Rs.399/year for doctors, while Hospital+ is for 
Rs. 2999/year. This is 10% of the average expense hospitals are offered </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={5} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Extremely Device-Friendly</h1>
    <p>Medoc is extremely device friendly, providing an optimal user experience across smartphones, tablets, and desktops. With intuitive design and responsive features, managing your healthcare needs is effortless and convenient on any device.</p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={6} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>User Friendly</h1>
    <p>  Experience peace of mind with our user-friendly platform that simplifies the process of managing your health, providing you with reliable and complete care at your fingertips. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={7} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Fitness Tracking</h1>
    <p> Embedded advanced fitness tracking features which will help you to stay motivated and informed with real-time data and personalized insights to support your health and wellness journey. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={8} style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>AI-Powered</h1>
    <p>Experience smarter healthcare management with AI-automated features that enhance accuracy, efficiency, and overall user satisfaction. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer offset={9}  style={{ ...alignCenter, justifyContent: 'flex-end'}}>
        <div className={styles.features}>
<div className={styles.featuretext}>
    <h1>Always Improving </h1>
    <p>Committed to continuous innovation, we ensure our platform evolves to meet your healthcare needs more effectively and efficiently over time. </p>
</div>


</div> 
        </ParallaxLayer>
        <ParallaxLayer style={{...pLayer}} offset={10} sticky={{start:10, end:14}} >
<div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc +</h1>


  <h3> Nursing Module</h3>
  <p>Efficiently manage tasks and patient data with customizable settings for a smooth workflow.</p>

  <h3> Pharma Module</h3>
  <p>Manage medication orders, track inventory, and process payments seamlessly.</p>

  <h3> Paramedics Module</h3>
  <p>Locate nearby medical facilities, connect with paramedics for swift crisis response.</p>
                   
</div>

<div>
<img src={ua1} alt="#"></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={11} sticky={{start:11, end:14}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>DocAssist</h1>
                  
                      <h3> Doctors’ Personal Digital Assistant</h3>
                      <p>Easily manage prescriptions, allergies, and genetic markers with AI assistance.</p>
                   
                      <h3> Medical Transcription in Multiple Languages</h3>
                      <p>Customize medication plans using MedPad templates for precise patient care.</p>

                      <h3> Auto-completion of Medical Prescription</h3>
                      <p>Streamline your schedule with intuitive booking, customization, and automated reminders.</p>
                     
</div>

<div style={{marginRight:35}}>
<img src={ua2} alt="#"></img>
</div>
</div>
            </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={12} sticky={{start:12, end:14}} >
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Hospital+</h1>
                      <h3> Hospital Resource Management</h3>
                      <p>Efficiently allocate and optimize hospital resources.</p>
                      <h3> Flexible Auto-Scheduling of Surgeries and Appointments</h3>
                      <p>Seamlessly manage surgical procedures and patient appointments .</p>
                      <h3> Ecosystem Connect</h3>
                      <p>Foster seamless integration and communication within the hospital ecosystem.</p>
</div>

<div style={{marginTop:220,marginLeft:70}}>
<img src={ua3} alt="#"></img>
</div>
</div>
                </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={13} sticky={{start:13, end:14}}>
            <div className={styles.userappdescription}>
              <div className={styles.userdes}>
                  <h1>Medoc Card</h1>
                  
                      <h3> NFC & QR based Card</h3>
                      <p>Effortlessly manage your healthcare with a simple scan or tap.</p>
                      <h3> Seamless Healthcare Access</h3>
                      <p>Experience hassle-free healthcare services at your fingertips</p>
                      <h3> Instant Medical Information</h3>
                      <p>Access vital medical data anytime, anywhere.</p>
              </div>

              <div style={{marginTop:170}}>
                <img src={ua4} alt="#"></img>
              </div>
            </div>
                </ParallaxLayer>
            <ParallaxLayer style={{...pLayer}} offset={14} sticky={{start:14, end:14}}>
            <div className={styles.userappdescription}>
                <div className={styles.userdes}>
                  
                <h1>Medoc+ Pharma</h1>
       <h3>
       Pharmacies:
       <p>Seamlessly track and manage medication stock levels.</p>
       </h3>
       <h3> Hospital/Clinic Receptions:</h3>
       <p>
Facilitate smooth scheduling of patient appointments, optimizing clinic workflow and reducing wait times.</p>
       <h3>Nurses and Paramedics:</h3>
       <p>Access comprehensive patient care plans and medical histories.</p>
                </div>
                <div>
                <img src={ua5} alt="#"></img>
              </div>
            </div>
            </ParallaxLayer>
            {/* <ParallaxLayer style={{...pLayer}} offset={15} sticky={{start:15, end:15}}>
            <div className={styles.userappdescription}>
<div className={styles.userdes}>
<h1>Medoc+ Emergency</h1>

</div>

<div>
<img src={ua1} alt="asd"></img>
</div>
</div>
            </ParallaxLayer>
    */}
            <ParallaxLayer offset={15}  style={{zIndex:"1",backgroundColor:"white"}}> 

            <div className={styles.highlightContainer} >


           

            <div className={styles.highlightBox}>

                <div className={styles.highlightElement}>
                <h2>Available on ALL devices</h2>
                <div className={styles.pill}>Know More</div>

                <img src={hi1}className={styles.highlightImage} alt="" />

                </div>

                <div className={styles.highlightElement}>
                <h2>Healthcare on Your Fingertips</h2>
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

            <ParallaxLayer  offset={16}sticky={{start:15, end:17}} style={{zIndex:"-2"}} >
             
              <div className={styles.corridordiv}>              
              </div>              
            </ParallaxLayer>

            <ParallaxLayer offset={16} style={{zIndex:"2"}}>
              <div className={styles.bt}>
                <img src={bt} className={styles.btImg} alt="" />
                <h1>It’s perfect time to join the Medoc Ecosystem.</h1>
                <p>Own your health and Life.</p>
                <img src={playbutton} className={styles.playbutton} alt="" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={17}  style={{backgroundColor:"#EEEEEE",height:"100vh",zIndex:"1"}}>
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
            <ParallaxLayer offset={18} style={{backgroundColor:"#EEEEEE"}}>
            <div className={styles.footer}>

            <div className={styles.footerflex}>
                <div className={styles.footercontb}>  
                  <img src={medoclogoblack} className={styles.footermedoc}></img>
                  <p>The complete healthcare ecosystem building towards better accessibility to healthcare and supporting you with medical finances and family medicine.</p>
                </div>
                <div className={styles.footerconts}>
                  <h1>Usefull Links</h1>
                  <Link className={styles.footeritems}>How it Works?</Link>
                  <Link to='/privacypolicy' className={styles.footeritems}>Privacy Policy</Link>
                  <Link to='/termsofuse' className={styles.footeritems}>Terms of Use</Link>
                  <Link to='/refundpolicy' className={styles.footeritems}>Refund policy</Link>
                </div>
                <div className={styles.footerconts}>
                  <h1>Support</h1>
                  <Link to='/faq' className={styles.footeritems}>FAQs</Link>
                  <Link className={styles.footeritems}>Editor Help</Link>
                  <Link className={styles.footeritems}>Live Chatting</Link>
                  <Link className={styles.footeritems}>Contact Us</Link>
                </div>
                <div className={styles.footercontm}>
                <img src={fPlayButton} className={styles.footerplaybutton} alt="" />
                </div>
              </div>
              <div style={{ position: 'relative', height: 'full', marginBottom: '50px' }}>
            <div style={{ padding: 0, position: 'absolute', bottom: 0, width: '100%' }}>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>
                    &copy; {new Date().getFullYear()} Medoc, ALL rights reserved
                </p>
            </div>
        </div>

            </div>
            </ParallaxLayer>
       
            
    
     </Parallax>
 </div>
      

}
export default HomePage;

