import React from 'react'
import imgg1 from '../assets/hCircle.svg'
import imgg2 from '../assets/hTriangle.svg'
import imgg3 from '../assets/hRect.svg'
// import Line from '/Users/HimanshuYadav/Desktop/Projects/AssessmentProject2/Assignment2/AnimationReactProj/Images/Line.jpg'

const Header = () => {
  return (
    <div className='pt-8'>
        <div className='flex flex-row justify-around align-middle'>
           <div className='flex flex-row hover:cursor-pointer'>
             <img className='w-5 h-5 ' src={imgg1} />
             <div style={{fontFamily:'SF Pro Display', fontWeight:'400', lineHeight:'20px', display:'inline', color:'rgba(242, 242, 242, 0.75)'}} className='pl-3 text-xl hover:text-2xl'>Opportunities</div>
           </div>

           <div className='flex flex-row hover:cursor-pointer'>
             <img className='w-5 h-5' src={imgg2} />
             <div style={{fontFamily:'SF Pro Display', fontWeight:'400', lineHeight:'20px', display:'inline', color:'rgba(242, 242, 242, 0.75)'}} className='pl-3 text-xl hover:text-2xl'>How it Works</div>
           </div>

           <div className='flex flex-row hover:cursor-pointer'>
           <img className='w-5 h-5' src={imgg3} />
             <div style={{fontFamily:'SF Pro Display', fontWeight:'400', lineHeight:'20px', display:'inline', color:'rgba(242, 242, 242, 0.75)'}} className='pl-3 text-xl hover:text-2xl'>About Us</div>
           </div>
           
        </div>
       <div className='p-4'>
            {/* <img className='' style={{border: '1px solid rgba(220, 222, 242, 0.10)'}} src={Line}></img> */}
        
            {/* <hr style={{border:'1px solid gray', width:'80%', marginLeft:'10%'}} className="inline-block h-0.5px my-2"></hr> */}
            <hr style={{margin:'0% 7% 0% 7%'}} class="h-px my-2 bg-gray-600 border-0 dark:bg-zinc-600"></hr>
        </div>
    </div>
  )
}

export default Header