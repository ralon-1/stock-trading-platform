import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Hero from './Hero';
import Pricing from './Pricing';
import Footer from '/Users/pravesh/Downloads/THISPC/react_frontend/zerodha-clone/frontend/src/landing_page/Footer.js'
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