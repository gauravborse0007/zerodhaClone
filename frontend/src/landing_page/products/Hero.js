import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center' style={{margin:"6%"}}>
            <h1>Technology</h1>
            <h6>Sleek, modern and intuitive trading platform</h6>
            <p>Check out our <a href='#' style={{textDecoration:"none"}}>investment offering 
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i> 
                </a>
            </p>
        </div>
     );
}

export default Hero;