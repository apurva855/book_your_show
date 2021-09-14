import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/Poster.component";

//component settings
import settings from "../../config/PosterCarousal.config";

//component /PremierImages
import PremierImages from "../../config/TempPosters.config";

 const Premier = () => {


  return (
    <>
    <div>
    <h3 className="text-white text-xl font bold">Premiers</h3>
    <p className="text-white text-sm mb-1">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
    {PremierImages.map((image)=> (
      <Poster {...image} isDark  />
    ))}
    </Slider>
    </>
  );
};

export default Premier;
