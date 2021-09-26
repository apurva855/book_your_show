import { Route } from "react-router-dom";
//axios
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//Component
//import Temp from "./components/temp";
//HomePage
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";


//slick carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//AXIOS Default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie" exact component={Movie} />
<Plays path="play" exact component={Plays}/>
    </>
  );
}

export default App;
