
import React from "react";
import styles from '../css/homepage.module.css';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import SliderData from  '../data/caroData.jsx';

function CarouselSlider(){
    const [index,setIndex]=useState(0);
    const timeout=useRef(null);
    function resetTimeout(){
        if(timeout.current){
            clearTimeout(timeout.current);
        }
    }
    useEffect(()=>{
        resetTimeout();
        timeout.current=setTimeout(()=>{
            setIndex((prevIndex)=>prevIndex===SliderData.length-4?0:prevIndex+1); 
        },2500);
        return()=>{
            resetTimeout();
        }
    },[index,7]);
return    <div className={styles.carousel}>
<div className={styles.carouselData} style={{ transform: `translate3d(${-index * 16.5}%, 0, 0)` }}>
    {SliderData.map((data,index)=>{
        return (
            <div className={styles.slide} key={index}>
                <img className={styles.sliderimage} src={data.image} alt="slide" />

                </div>
        )
    })}
</div>
<div className="slideshowDots">
          {SliderData.slice(0,SliderData.length-3).map((_, idx) => (
        index===idx?<div
        key={idx}
        className={styles.slideshowDotactive}
        onClick={() => {
          setIndex(idx);
        }}
      ></div>:<div
      key={idx}
      className={styles.slideshowDot}
      onClick={() => {
        setIndex(idx);
      }}
    ></div>
          ))}
        </div>

</div>
}
export default CarouselSlider;