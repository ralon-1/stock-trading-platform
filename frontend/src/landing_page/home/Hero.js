import React from 'react';
function Hero() {
    return (
       
        <div className='container mb-5 '>
            <div className="row text-center">
                <img src="images/homeHero.png" alt="hero image" className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button  className=' p-2 btn  btn-primary fs-1.2' style={{width:"22%" ,margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
      );
}

export default Hero;