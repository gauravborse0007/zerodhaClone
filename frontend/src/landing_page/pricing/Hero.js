import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='text-center m-5'>
                <h2>Pricing</h2>
                <p className='text-muted mt-5'>Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>
            <hr />
            <div className='row text-center text-muted m-5'>
                <div className='col-4'>
                    <img src='\media\images\pricing0.svg' alt='priceImg'></img>
                    <h2>Free equity delivery</h2>
                    <p className='mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='\media\images\pricing0.svg' alt='priceImg'></img>
                    <h2>Intraday and F&O trades</h2>
                    <p className='mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='\media\images\pricing0.svg' alt='priceImg'></img>
                    <h2>Free direct MF</h2>
                    <p className='mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <div className='container p-5 mb-5'>
                <div className='row text-center'>
                    <h1 className='mt-5'>Open a Zerodha account</h1>
                    <p className='text-muted'>Mordern platform apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button type="button" class="btn btn-primary btn-lg" style={{ width: "15%", margin: '0 auto', marginBottom: '5%' }}>Signup Now</button>
                </div>
            <hr />
            </div>
        </div>
    );
}

export default Hero;