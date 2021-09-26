import React, {useEffect,useState} from "react";
import axios from "axios";
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const Plays = () => {
  const [popularPlays,setPopularPlays]=useState([]);
  useEffect(()=>{
    const requestPopularPlays = async () =>{
      const getPopularPlays = await axios.get("movie/popular");
      setPopularPlays(getPopularPlays.data.results);
    };
    requestPopularPlays();
  }, []);
  console.log({popularPlays});
return (
<>
<div className="container mx-auto px-4 ">
  <div className="w-full md:flex md:flex-row-reverse">
    <div className="md:w-8/12">
      <h2 className="text-xl font-bold mb-4">Plays in Bhubaneswar</h2>
      <div className="flex flex-wrap">
        <div className="w-1/2  my-3 md:w-1/4">
          <PosterSlider
            images={popularPlays}
            title="Plays"
            subtitle="Plays Near You"
            isDark={false}
          />
        </div>
      </div>

      <div className="md:w-1/2 ">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="text-sm">
          <PlaysFilter title="Date" tags={["Today","Tomorrow","Weekend"]}/>
        </div>
      </div>
    </div>
  </div>
</div>

</>
);
};
export default Plays;
