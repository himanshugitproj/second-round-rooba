import React from "react";
import imgg from "../assets/Background.png";

const Section3 = () => {
  return (
    <div className="h-[50vh]">
    <div className="bg-white" style={{height:"auto", position:'relative'}}  >
        <div className="flex justify-center ">
        <img style={{position:'absolute'}} className=" w-[75%]" src={imgg} />
            
        <div className="justify-center flex-1 mt-40 ml-[40%]">
            <div
                style={{
                color: "black",
                top:'50px',
                width: "50px",
                fontFamily: "IvyPresto Display",
                fontWeight: "100",
                fontSize: "64px",
                lineHeight: "64px"
                }}
            >
                WHY 
            </div>
            <div
                className="pl-20"
                style={{
                color: "black",
                top:'50px',
                width: "50px",
                fontFamily: "IvyPresto Display",
                fontWeight: "100",
                fontSize: "64px",
                lineHeight: "64px"

                }}
            >
                 INVEST?
            </div>
        </div>
       
        </div>
    </div>
    {/* <div className="-mt-10 z-10 bg-white">
            <div className="justify-center">
                Putting your money in land may provide for better yield and returns making for a steady investment strategy.
            </div>
        </div> */}

    </div>
  );
};

export default Section3;
