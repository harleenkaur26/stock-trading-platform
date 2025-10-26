import React from "react";
import Hero from "../product/Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="www.zerodha.com/kite"
        learnMore="www.zerodha.com/kite"
        googlePlay="www.zerodha.com/kite"
        appStore="www.zerodha.com/kite"
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="www.zerodha.com/console"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="www.zerodha.com/coin"
        learnMore="www.zerodha.com/coin"
        googlePlay="www.zerodha.com/coin"
        appStore="www.zerodha.com/coin"
      />
      <RightSection
        imageUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="www.zerodha.com/kiteconnect"
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="www.zerodha.com/varsity"
        learnMore="www.zerodha.com/varsity"
        googlePlay="www.zerodha.com/varsity"
        appStore="www.zerodha.com/varsity"
      />
      <div className="container">
        <p className="text-center mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      </div>
      <Universe />
    </>
  );
};

export default ProductPage;
