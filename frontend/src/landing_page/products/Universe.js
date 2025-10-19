import React from 'react';
function Universe() {
    return (
        <div className='container' style={{ paddingTop: '8%' }}>
            <div className='row text-center p-5'>
                <h3>The Zerodha Universe</h3>
                <br />
                <p className='mb-5 mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                <br />
                <br />
                <div className='container col-4'>
                    <img src='\media\images\zerodhaFundhouse.png' alt='zerodhaFundhouse' style={{ height: "45%", width: "52%" }}></img>
                    <p className='text-muted text-small' style={{ marginTop: "10px", marginLeft: "22%", marginRight: "22%", fontSize: "12px" }}>Our asset management venture that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='container col-4'>
                    <img src='\media\images\sensibullLogo.svg' alt='sensibullLogo' style={{ height: "45%", width: "52%" }}></img>
                    <p className='text-muted text-small' style={{ marginTop: "10px", marginLeft: "22%", marginRight: "22%", fontSize: "12px" }}>Options trading platform that lets you create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='container col-4'>
                    <img src='\media\images\smallcaseLogo.png' alt='smallcaseLogo' style={{ height: "43%", width: "52%" }}></img>
                    <p className='text-muted text-small' style={{ marginTop: "10px", marginLeft: "22%", marginRight: "22%", fontSize: "12px" }}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
            </div>
            <div className='row text-center p-5'>
                <div className='container col-4'>
                    <img src='\media\images\goldenpiLogo.png' alt='goldenpiLogo'></img>
                    <p className='text-muted text-small' style={{ marginTop: "10px", marginLeft: "22%", marginRight: "22%", fontSize: "12px" }}>Investment research platform that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className='container col-4'>
                    <img src='\media\images\streakLogo.png' alt='streakLogo' style={{ height: "32%", width: "45%" }}></img>
                    <p className='text-muted text-small' style={{ marginTop: "10px", marginLeft: "22%", marginRight: "22%", fontSize: "12px" }}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className='container col-4'>
                    <img src='\media\images\dittoLogo.png' alt='dittoLogo' style={{ height: "35%", width: "38%" }}></img>
                    <p className='text-muted text-small' style={{ marginTop: "10px", marginLeft: "22%", marginRight: "22%", fontSize: "12px" }}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
                <button type="button" class="btn btn-primary btn-lg" style={{ width: "15%", margin: '0 auto', marginTop: '4%' }}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;