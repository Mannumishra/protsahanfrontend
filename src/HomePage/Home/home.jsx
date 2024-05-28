import React from "react";
import NewsCompaign from "../News-Compaign/newsCompaign";
import AboutProthsahan from "../AboutProthsahan/aboutProthsahan";
import Testimonial from "../Testimonial/testimonial";
import Carousel from "../HomeCarousel/carousel";
import HealthCare from "../../Navlinks/OurFocus/HealthCare";
import Gallery from "../../Navlinks/NewsViews/PhotoGallary";
import '../../HomePage/HomeCarousel/carousel.css'
const home = () => {
  return (
    <>
    <div className="fullBody">

      <Carousel />
      <NewsCompaign />
      <AboutProthsahan />
      <Gallery />
      <HealthCare />
      <Testimonial />
    </div>
    </>
  );
};

export default home;
