import React from "react";
import Banner from "../Banner/Banner";
import HowToWorks from "../HowToWorks/HowToWorks";
import Services from "../Services/Services";
import SalesTeam from "../SalesTeam/SalesTeam";
import Benefits from "../Benefits/Benifits";
import BeMerchant from "../BeMerchant/BeMerchant";
import CustomerReview from "../CustomerReview/CustomerReview";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowToWorks></HowToWorks>
      <Services></Services>
      <SalesTeam></SalesTeam>
      <Benefits></Benefits>
      <BeMerchant></BeMerchant>
      <CustomerReview></CustomerReview>
      <Faq></Faq>
    </div>
  );
};

export default Home;
