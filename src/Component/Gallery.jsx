import React, { useState } from 'react';

const Gallery = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div style={styles.container}>
      <div
        style={{ ...styles.section, ...(hoveredSection === 'createAccount' && styles.activeSection) }}
        onMouseEnter={() => handleMouseEnter('createAccount')}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>Create Account</h2>
          <span style={styles.plus}>+</span>
        </div>
        {hoveredSection === 'createAccount' && (
          <div style={styles.content}>
            <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
            <button style={{border: '1px solid black'}} class="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 mt-4 inline-flex items-center">
              <span className='mr-2'>Start Now</span>
              {/* <svg class="fill-current  w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
              <svg width="36" height="6" viewBox="0 0 36 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.2831 2.89209L30.2831 0.00533843V5.77884L35.2831 2.89209ZM0.76709 3.39209H30.7831V2.39209H0.76709V3.39209Z" fill="black"/>
</svg>

          </button>
          </div>
        )}
      </div>
      <div
        style={{ ...styles.section, ...(hoveredSection === 'discoverOpportunities' && styles.activeSection) }}
        onMouseEnter={() => handleMouseEnter('discoverOpportunities')}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>Discover Opportunities</h2>
          <span style={styles.plus}>+</span>
        </div>
        {hoveredSection === 'discoverOpportunities' && (
          <div style={styles.content}>
            <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
          </div>
        )}
      </div>
      <div
        style={{ ...styles.section, ...(hoveredSection === 'investWithFlexibility' && styles.activeSection) }}
        onMouseEnter={() => handleMouseEnter('investWithFlexibility')}
        onMouseLeave={handleMouseLeave}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>Invest with Flexibility</h2>
          <span style={styles.plus}>+</span>
        </div>
        {hoveredSection === 'investWithFlexibility' && (
          <div style={styles.content}>
            <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    borderBottom: '1px solid #e0e0e0',
    cursor: 'pointer',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  activeSection: {
    borderLeft: '3px solid blue',
    paddingLeft: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  plus: {
    fontSize: '24px',
  },
  content: {
    marginTop: '10px',
    
  },
};

export default Gallery;
