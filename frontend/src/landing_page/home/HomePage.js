import React from 'react';
import Awards from '/Users/pravesh/Downloads/THISPC/react_frontend/zerodha-clone/frontend/src/landing_page/home/Awards.js';
import Education from '/Users/pravesh/Downloads/THISPC/react_frontend/zerodha-clone/frontend/src/landing_page/home/Education.js';
import Stats from './Stats';
import OpenAccount from '/Users/pravesh/Downloads/THISPC/react_frontend/zerodha-clone/frontend/src/OpenAccount.js';
// import Navbar from '/Users/pravesh/Downloads/THISPC/react_frontend/zerodha-clone/frontend/src/Navbar.js';
import Hero from './Hero';
import Pricing from './Pricing';
import Footer from '/Users/pravesh/Downloads/THISPC/react_frontend/zerodha-clone/frontend/src/Footer.js'
function HomePage() {
    return (  
        <>
    
    

        <Hero/>
    {/* </Reveal> */}
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>

        </>
    );
}

export default HomePage;
