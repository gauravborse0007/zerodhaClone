import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png'className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p >Online platform to invest in stocks, derivatives, mutual funds ad more</p>
                <button type="button" class="btn btn-primary btn-lg" style={{width:"15%", margin:'0 auto',marginBottom:'5%'}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;