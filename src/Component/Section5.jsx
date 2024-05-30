import React from "react";
import Gallery from "./Gallery";

const Section5 = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">

  <div className="flex flex-col items-center">
    <div className="w-72 h-28 mb-20">
      <img src="HowtoInvest.png" alt="How to Invest"></img>
    </div>
    <div className="pr-10 mr-5">
      <Gallery></Gallery>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <img src="MacBook1.png" alt="Image description"></img>
  </div>

</div>

  );
};

export default Section5;