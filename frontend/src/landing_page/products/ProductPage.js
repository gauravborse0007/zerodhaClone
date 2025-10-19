import React from 'react';
import Hero from './Hero';
import RightSection from './RightSection';
import Universe from './Universe';
import LeftSection from './LeftSection';


function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="/media/images/kite.png"
                productName="kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                trydemo="try Demo"
                learnMore="Learn more"
                googlePlay="\media\images\googlePlayBadge.svg"
                appStore="\media\images\appstorebadge.svg"
            />
            <RightSection
                imageURL="/media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="Learn More"
                googlePlay="\media\images\googlePlayBadge.svg"
                appStore="\media\images\appstorebadge.svg"
            />
            <LeftSection
                imageURL="/media/images/coin.png"
                productName="coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                trydemo="coin"
                learnMore=""
                googlePlay="\media\images\googlePlayBadge.svg"
                appStore="\media\images\appstorebadge.svg"
            />
            <RightSection
                imageURL="/media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore="Kite Connect"
                googlePlay="\media\images\googlePlayBadge.svg"
                appStore="\media\images\appstorebadge.svg"
            />
            <LeftSection
                imageURL="/media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                trydemo=""
                learnMore=""
                googlePlay="\media\images\googlePlayBadge.svg"
                appStore="\media\images\appstorebadge.svg"
            />
            <h5 className='text-center text-muted'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}> Zerodha.tech</a> blog.</h5>
            <Universe />
        </>
    );
}

export default ProductPage;