import React from "react";
import HeroSlider from "react-slick";

//component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () =>{
  const settingsLg = {
    arrows:true,
    autoplay:true,
    centerMode:true,
    slidesToShow:1,
    centerPadding:"300px",
    infinite:true,

  }
  const settings ={
    arrows:true,
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,

  };
  const images=[
    "https://in.bmscdn.com/promotions/cms/creatives/1631561786777_courtroomdramas_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631562943527_gauravkapoorliveevent_promo_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630993174880_rannutsavpromotionalbanners_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg"
  ]
  return(
    <>
      <div className="lg:hidden md:block">
      <HeroSlider { ...settings}>
      {
        images.map((image)=>(
          <div className="w-full h-64 md:h-60 py-3">
          <img src={image} alt="testing" className="w-full h-full rounded-md"/>
          </div>
        ))
      }
      </HeroSlider>
      </div>

      <div className="hidden lg:block">
      <HeroSlider { ...settingsLg}>
      {
        images.map((image)=>(
          <div className="w-full h-96 px-2 py-3 ">
          <img src={image} alt="testing " className="w-full h-full rounded-md"/>
          </div>
        ))
      }
      </HeroSlider>
      </div>

    </>

  );
};

export default HeroCarousal;
