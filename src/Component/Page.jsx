  
  "use client"; // Add this directive at the top

  import React, { useRef, useEffect, useState } from 'react';

  import Lottie from 'lottie-react';
  import animationData from "../assets/Animations/animation2.json";
  
  const Page = () => {
    const lottieRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
  
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
  
      setScrollProgress(scrollPercent);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (lottieRef.current) {
        const animation = lottieRef.current;
        const totalFrames = 177;
        const currentFrame = totalFrames * scrollProgress;
        animation.goToAndStop(currentFrame, true);
      }
    }, [scrollProgress]);
  
    return (
  
      <div style={{ margin:'',height: 'auto', display:'flex', justifyContent:'space-evenly'}}>
       <div style={{ marginTop: '40vh', height: '20%', width:'30%'}}>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={false}
          />
        </div>
      </div>
    );
  };
  
  export default Page;
  