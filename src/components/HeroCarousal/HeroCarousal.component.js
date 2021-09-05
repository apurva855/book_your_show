import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settingsLg={
    arrows:true,
    autoplay:true,
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1,
    centerPadding:"300px",
    infinite:true
  }
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const images=[
  "https://images.unsplash.com/photo-1630576904866-d51b579796f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80",
  "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
  "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80",
  "https://images.unsplash.com/photo-1630601698490-b7bf0b6295ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1630630911008-f89ba252906a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
  "https://images.unsplash.com/photo-1630523628199-f2681ef83443?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
]
  return (
    <>
    <div className="lg:hidden">
    <HeroSlider{...settings}>
    {
      images.map((image)=>(
        <div className="w-full h-44 md:68 py-3">
        <img src={image} alt="testing" className="w-full h-full rounded-md" />
        </div>
      ))
    }
    </HeroSlider>
    </div>
    <div className="hidden lg:block">
    <HeroSlider{...settingsLg}>
    {
      images.map((image)=>(
        <div className="w-full h-96 px-2 py-5">
        <img src={image} alt="testing" className="w-full h-full rounded-md" />
        </div>
      ))
    }
    </HeroSlider>
    </div>

    </>
  );
}
export default HeroCarousal;
