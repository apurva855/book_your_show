import React from "react";
import CastSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CastCarousal = (props) => {

    return(
        <>
        <div className="w-full h-30 px-2">
            <img className="w-full h-full px-3" style={{borderRadius:"50%"}} src={props.src}alt="Cast Image"/>
        </div>
        </>
    );
};

const CastCarousalSlider = () => {
    const castCarousalImage = [
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jr-ntr-15411-19-09-2017-01-52-16.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/mahesh-babu-36982-20-12-2017-04-21-05.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ram-charan-teja-1046368-19-09-2017-02-37-43.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/alia-bhatt-21065-13-09-2017-04-53-45.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/samuthirakani-1052542-24-03-2017-17-46-22.jpg"
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
            <CastSlider {...settings}>
            {castCarousalImage.map((image) =>(
                <CastCarousal src={image} />
            ))}
            </CastSlider>
        </>
      );
};

export default CastCarousalSlider;
