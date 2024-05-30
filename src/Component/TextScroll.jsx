import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import Page from './Page';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    text: 'Empower your financing strategies with tomorrows revolutionary technology. Our user-friendly platform will give your investors the power to unlock de-fi capabilities hence boosting the liquidity of your fund by large margins.',
    bgColor: 'gray',
    fgColor: 'white'
  }

];

const styles = {
  
  section: {
    height: 'auto',
    display: 'flex',
    justifyContent: '',
    lineHeight:'54px'
  },
  p: {
    fontSize: '42px',
    fontWeight:'400',
    
  },
  section1: {
    borderBottom: '1px solid black'
  },
  section3: {
    background: '#131313',
    fontSize:'42px',
    width:'75%'
    
  },
  section4: {
    background: '#131313',
    color: 'white'
  }
};

const TextScroll = () => {
  useEffect(() => {
    // Splitting must be called first to split the text
    const splitTypes = Splitting({ target: '.reveal-type', by: 'chars' });

    // Use GSAP to animate the text
    splitTypes.forEach(split => {
      const chars = split.chars;
      const bg = split.el.dataset.bgColor;
      const fg = split.el.dataset.fgColor;

      gsap.fromTo(chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.01,
          scrollTrigger: {
            trigger: split.el,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div>
    <Page></Page>
    <div style={{position:'relative'}}>

    <div style={{height:'auto'}} className='flex items-center justify-center'> 
      
      
      {sections.map((section, index) => (
        <section
          key={index}
          style={{
            ...styles.section,
            ...(index === 0 ? styles.section3 : index === 1)
          }}
        >
          <p
            className="reveal-type"
            data-bg-color={section.bgColor}
            data-fg-color={section.fgColor}
            style={styles.p}
            
          >
            {section.text}
          </p>
        </section>
      ))}
      {/* <section style={styles.section}></section> */}
    </div>
    </div>
    </div>
  );
};

export default TextScroll;
