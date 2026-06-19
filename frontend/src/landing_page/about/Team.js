function Team() {
    return (  
       <div className="container text-center mt-5">
        <div className="col">
            <h1>People</h1>
        </div>
        {/*  */}
        <div className="row">
            <div className="col p-5  text-muted">
                <img src="images/nithinKamath.jpg"  style={{borderRadius:"100%" ,width:"60%"}} alt="" />
                <h4 className="mt-5"> Nithin Kamath</h4>
                <h6>founder,CEO </h6>
            </div> 
            <div className="col pt-5 mt-5  text-center">
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
<br />
He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
<br />
Playing basketball is his zen.
<br />
Connect on Homepage / TradingQnA / Twitter
            </div>
        </div>
       </div>
    );
}

export default Team;