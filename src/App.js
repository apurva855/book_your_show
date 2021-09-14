import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Component
//import Temp from "./components/temp";
//HomePage
import HomePage from "./pages/Home.page"
//slick carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}
// / , /movie
export default App;
