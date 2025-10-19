import React from 'react';
function Stats() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer first always</h2>
                    <p className='text-muted'>That's why 1.3 crore customer trust zerodha with Ruppes 3.5+ lakh crore worth of equity investments</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notification.
                        High quality app that you use at your pace, the way you like
                    </p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h2 className='fs-4'>Do better with money </h2>
                    <p className='text-muted'>With initiative like nudge and kill switch, we don't just faciliate transaction , but actively help you do better with your money.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src='\media\images\ecosystem.png' style={{ width: "90%" }} />
                    <div className='text-center'>
                        <a href='#' className='mx-5'>Explore our app <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <a href='#' >Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stats;