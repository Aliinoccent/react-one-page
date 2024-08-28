import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from "./components/Work/work";
import Btn from "./components/button/button";
import Slider from "./components/slider/slider";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Work></Work>
      <Btn></Btn>
      <Slider></Slider>
      <About/>
    </div>
  );
}

export default App;
