import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    trydemo,
    learnMore,
    googlePlay,
    appStore }) {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-7 text-center mb-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-5' style={{marginTop:"4%"}}>
                    <h3 className='m-4'>{productName}</h3>

                    <p className='m-4' style={{lineHeight:"30px"}}>{productDescription}</p>

                    <a href='#' className='m-4' style={{ textDecoration: "none" }}>{trydemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <a href='#' style={{ textDecoration: "none" }}>{learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <br />
                    <img src={googlePlay} className='m-4' />
                    <img src={appStore} />
                </div>
            </div>
        </div>
    );
}

export default LeftSection;