  
  "use client"; // Add this directive at the top

  import React, { useRef, useEffect, useState } from 'react';
  import Lottie from 'lottie-react';
  import animationData from "../assets/Animations/animation1.json";
  //import image from '/Users/HimanshuYadav/Desktop/Projects/AssessmentProject2/Assignment2/AnimationReactProj/Images/Create_Account_btn.svg';
  import './Animation1.css';
  

  const Animation1 = () => {
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
        const totalFrames = 416;
        const currentFrame = totalFrames * scrollProgress;
        animation.goToAndStop(currentFrame, true);
      }
    }, [scrollProgress]);
  
    return (


    <div className='flex items-center'>
        <div className='w-1/2' style={{ margin: "100px", height: "200vh"}}>
            {/* Outer container with enough height to allow scrolling */}
            <div style={{ position: "sticky", top: "0", height: "100vh" }}>
            <div
                style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
                height: "50%",
                width: "115%",
                }}
            >
                <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={false}
                />
            </div>
            </div>
        </div>
        <div className='w-1/2 ' style={{ margin: "100px", height: "200vh"}}>
            {/* Outer container with enough height to allow scrolling */}
            <div className='' style={{ position: "sticky", top: "50px", height: "100vh" }}>
            <div className=' '
                style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
                height: "50%",
                width: "100%"
                }}
            >
                <div className='flex flex-col items-stretch'>
                    <p className='text-white ' style={{padding:'0px 10px 0px 0px' ,fontFamily:'SF Pro Display', fontSize:'32px', fontWeight:'500', lineHeight:'38px'}} >Pave your way to Alpha Gains and make the most of your investments.</p>
                    <p style={{padding:'20px 10px 10px 0px' ,fontFamily:'SF Pro Display', fontSize:'20px', fontWeight:'400', lineHeight:'24px', color:'rgba(242, 242, 242, 0.4)'}} >Start your journey now.</p>

                    <div className='m-5'>
                        <button id='CreateAccount'  type="button" style={{fontFamily:'SF Pro Display', fontSize:'16px',  lineHeight:'17px', color:'rgba(255, 255, 255, 1)'}} class="mt-5 font-medium animate-bounce bg-black hover:font-semibold border-gray-400 px-10 py-5 text-center mb-2">Create an Account</button>
                    </div> 
                </div>  
                   
            </div>
            </div>
        </div>
    </div>

    );
  };
  
  export default Animation1;
  