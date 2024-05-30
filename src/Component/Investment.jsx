import React from 'react';

const Investment = () => {
  return (
    <div className='flex items-center justify-around h-screen'>
        <div className='flex items-center justify-center'>
            <div >
               
                <img style={{height:'auto' , width:'auto', padding:'25px', margin:'25px' }} src='./Screenshot.png'></img>
            </div>
            <div className='w-1/2 text-white'>
                <div>
                    <p style={{padding:'0px 0px 0px 0px' ,fontFamily:'IvyPresto Display', fontSize:'64px', fontWeight:'0', lineHeight:'64px', color:'rgba(255, 255, 255, 1)'}} >Access</p>
                    <p style={{padding:'0px 0px 0px 30px' ,fontFamily:'IvyPresto Display', fontSize:'64px', fontWeight:'600', lineHeight:'64px'}} className='text-white italic' >Alternative</p>
                    <p style={{padding:'0px 0px 0px 20%' ,fontFamily:'IvyPresto Display', fontSize:'64px', fontWeight:'0', lineHeight:'64px', color:'rgba(255, 255, 255, 1)'}} >Investments</p>
                </div>
                <div className='pt-10'>
                    <p style={{padding:'0px 0px 0px 30px', width:'70%' ,fontFamily:'Switzer', fontSize:'16px', fontWeight:'400', lineHeight:'21px'}} className='text-white' >Unleashing the untapped potential of the alternative  markets through Rooba.Finance - Your gateway to superior returns and exclusive opportunities</p>
                    <p style={{padding:'15px 0px 0px 30px', width:'70%' ,fontFamily:'Switzer', fontSize:'16px', fontWeight:'400', lineHeight:'21px'}} className='text-white' >Discover the advantages of alternative market investments, unlock new horizons, and embark on a journey towards financial prosperity with our platform as your trusted partner. </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Investment