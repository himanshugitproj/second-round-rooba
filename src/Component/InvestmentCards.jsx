import React from 'react';
import './InvestmentCards.css';

const InvestmentCards = () => {
  return (
    <>
<div className='flex justify-center items-center '>
  <div style={{fontFamily:'Switzer', fontSize:'18px' , lineHeight:'22px', fontWeight:'600'}}>
    Putting your money in land may provide for better yield and returns making for a steady investment strategy.
  </div>
</div>

    <div className='flex bg-white justify-center mt-20'>

    <div  className="cards-container">
      <div  className="card hover:bg-[#F5F3EB] bg-[#F9F8F6] ">
        <div className="icon">
            <img src='./card1.png'></img>
        </div>
        <h2  className=' hover:pt-2 hover:pb-2' style={{fontFamily:'Switzer', fontSize:'22px' , lineHeight:'32px', fontWeight:'800'}}>The demand for land investments has never been higher.</h2>
        <p style={{fontFamily:'Switzer', fontSize:'18px' , lineHeight:'22px', fontWeight:'500'}}>
          As a collateral impact of Covid-19, weekend homes or a place to escape the bustle of the city are expanding rapidly.
        </p>
      </div>
      
      <div className="card hover:bg-[#F5F3EB] bg-[#F9F8F6] ">
        <div className="icon">
        <img src='./Card3.png'></img>
        </div>
        <h2  className=' hover:pt-2 hover:pb-2' style={{fontFamily:'Switzer', fontSize:'22px' , lineHeight:'31px', fontWeight:'700'}}>Prime Land Investment is Your Time-Tested Path to Enduring Prosperity</h2>
        <p style={{fontFamily:'Switzer', fontSize:'18px' , lineHeight:'22px', fontWeight:'500'}}>
          Seize the moment with a strategic investment choice — prime land. Historically valued for its enduring worth, land investment beckons as a cornerstone of prosperity.
        </p>
      </div>
      
      <div className="card hover:bg-[#F5F3EB] bg-[#F9F8F6] ">
        <div className="icon">
        <img src='./Card2.png'></img>
        </div>
        <h2 className=' hover:pt-2 hover:pb-2' style={{fontFamily:'Switzer', fontSize:'22px' , lineHeight:'32px', fontWeight:'800'}}>Unlock Tax Benefits with Smart Agricultural Land Investments.</h2>
        <p style={{fontFamily:'Switzer', fontSize:'18px' , lineHeight:'22px', fontWeight:'500'}}>
          Gains from selling agricultural land in rural India is subject to tax exemption. Now is the time to seize the opportunity to invest in rural agricultural land and reap the benefits of tax advantages.
        </p>
      </div>
      
      <div className="card hover:bg-[#F5F3EB] bg-[#F9F8F6] ">
        <div className="icon">
        <img src='./Card4.png'></img>
        </div>
        <h2 className=' hover:pt-2 hover:pb-2' style={{fontFamily:'Switzer', fontSize:'22.5px' , lineHeight:'32px', fontWeight:'700'}}>Own plots along the thriving Delhi-Bombay Expressway</h2>
        <p style={{fontFamily:'Switzer', fontSize:'18px' , lineHeight:'22px', fontWeight:'500'}}>
          The Delhi NCR & Sohna have established themselves as crucial real estate markets. The Delhi-Mumbai Expressway is expected to provide a solid push to real estate development in areas towards Rajasthan, boosting demand for land, residential & commercial properties.
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default InvestmentCards;

