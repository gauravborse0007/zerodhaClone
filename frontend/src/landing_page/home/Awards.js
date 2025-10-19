import React from 'react';
function Awards() {
    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>
                        2+ million Zerodha clients contribute to over 15% of all retail order
                        volume in India detail by trading and investing in :
                    </p>

                    <div className='row'>
                        <div className='col-6 '>
                            <ul >
                                <li className='pb-2'>Futures and Options</li>
                                <li className='pb-2'>Commodative derivatives</li>
                                <li className='pb-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='pb-2'>Stocks & IPOs</li>
                                <li className='pb-2'>Direct mutual funds</li>
                                <li className='pb-2'>Bonds and Govt. Securites</li>
                            </ul>
                        </div>
                        <img src='/media/images/pressLogos.png' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
