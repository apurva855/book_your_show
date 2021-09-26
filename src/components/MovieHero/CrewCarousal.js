import React from "react";
import CrewSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CrewCarousal = (props) => {



    return(
        <>
        <div className="w-full h-30 px-2">
            <img className="w-full h-full px-3" style={{borderRadius:"50%"}} src={props.src}alt="Cast Image"/>
        </div>
        </>
    );
};

const CrewCarousalSlider = () => {
    const crewCarousalImage = [
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/s-s-rajamouli-29189-07-10-2020-04-30-40.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/d-v-v-danayya-iein008889-24-03-2017-14-03-39.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/trivikram-srinivas-5707-19-09-2017-12-59-06.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/m-m-keeravani-1057248-21-02-2018-11-05-59.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/senthil-kumar-iein005633-24-03-2017-13-04-32.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/a.-sreekar-prasad-iein008770-24-03-2017-14-02-53.jpg",

    ];
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll:0,
        InitialSlide: 0
      };

      return(
          <>
            <CrewSlider {...settings}>
            {crewCarousalImage.map((image) =>(
                <CrewCarousal src={image} />
            ))}
            </CrewSlider>
        </>
      );
};

export default CrewCarousalSlider;
