import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src='\media\images\education.svg'/>
                </div>
                <div className='col-6'>
                    
                    <h1 className='mt-5 fs-3 pb-4'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world 
                        <br></br>
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href='#'style={{textDecoration:"none"}} > Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <br/>
                    <br/>
                    <br/>
                    <p>TradingQandA, the most active trading and investment community in 
                        <br></br>
                        India for all your market related queries.
                    </p>
                    <a href='#'style={{textDecoration:"none"}} > TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                
                </div>
            </div>
        </div>
     );
}

export default Education;