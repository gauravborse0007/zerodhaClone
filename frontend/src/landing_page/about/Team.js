import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className='row p-5 border-top'>
                <h4 className='text-center mt-5 ' style={{ marginLeft: "8%" }}>
                    People
                </h4>
            </div>
            <div className='row'>
                <div className='col-6 p-5 '>
                    <img src='\media\images\nithinKamath.jpg' style={{ borderRadius: "100%", height: "60%", marginLeft: "35%" }} />

                    <div style={{ marginLeft: "55%" }}>
                        <br />
                        <h5>&nbsp;Nitin Kamath</h5>
                        <br></br>
                        <p>&nbsp;&nbsp;&nbsp;Founder, CEO</p>
                    </div>
                </div>
                <div className='col-6 p-5 mt-3 text-muted' style={{lineHeight:"1.6em" }}>
                    <p>

                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    < p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>

                        Playing basketball is his zen.
                    </p>

                    Connect on <a href='' style={{ textDecoration: "none" }}> Homepage / TradingQnA / Twitter </a>
                </div>
            </div>
        </div>
    );
}

export default Team;