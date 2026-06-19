import React from 'react';
function Pricing() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href="" className='mx-3' style={{textDecoration:"none"}} >See pricing </a>

                </div>
                <div className="col-2"></div>
                {/* ight half */}
                <div className="col-6">
                <div className="row">
                    <div className="col p-5 text-center border">
                        <h1>0</h1>
                        <p>Free equity delivery
and direct mutual funds</p>
                    </div>
                    <div className="col p-5 text-center border">
                        <h1>20</h1>
                        <p>Intraday and
F&O</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;