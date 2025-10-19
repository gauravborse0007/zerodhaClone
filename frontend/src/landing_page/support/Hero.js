import React from 'react';
function Hero() {
    return (
        <div  style={{backgroundColor:"#f6f6f6"}}>
        
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Support Portal</h1>
                </div>
                <div className='col-6 p-3' style={{display: "flex",justifyContent: "flex-end"}}>
                    <button type="button" class="btn btn-primary">My tickets</button>
                </div>
            </div>
            <textarea style={{width:"100%", marginTop:"22px", paddingTop:"15px", marginBottom:"35px"}} placeholder='Eg: How do I open my account, How do i activate F&O...'></textarea>
        </div>
        </div>
    );
}

export default Hero;