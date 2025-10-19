import React from 'react';
function Brokerage() {
    return (
        <div className='container'>
            <div className='row text-muted'>
                <div className='col-8 '>
                    <h5 className='text-center mb-4 pb-2'><a href='#' style={{ textDecoration: "none" }}>Brokerage calculator</a></h5>
                    <ul >
                        <li className='pb-3'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50+GST per order. </li>
                        <li className='pb-3'>Digital contract notes will be sent via e-mail.</li>
                        <li className='pb-3'>Physical copies of cobtract notes,if required shall be charged ₹20 per contract note. Courier charges apply</li>
                        <li className='pb-3'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower)
                        </li>
                        <li className='pb-3'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)
                        </li>
                        <li className='pb-3'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h5 className='text-center mb-4 pb-2'><a href='#' style={{ textDecoration: "none" }}>List of charges</a></h5>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;