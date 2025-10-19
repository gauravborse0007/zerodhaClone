import React from 'react';
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className='container' style={{paddingBottom:"10%"}} >
            <div className='row'>
                <div className='col-4' style={{paddingTop:"10%"}} >
                    <h3 className='' style={{marginLeft:"6%"}}>{productName}</h3>

                    <p className='m-4' style={{ lineHeight: "30px" }}>{productDescription}</p>

                    <a href='#' className='m-4' style={{ textDecoration: "none" }}>{learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <br />
                </div>
                <div className='col-8 text-center'>
                    <img src={imageURL} />
                </div>
            </div>
        </div >
    );
}

export default RightSection;