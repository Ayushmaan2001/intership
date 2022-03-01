import "./App.css";
import Navbar from "./JSX/Navbar";
import AboutMeContent from "./JSX/AboutMeContent";
import AboutUs from "./JSX/About_me";
import Image from "./JSX/Image";
import Wildlife from "./JSX/Wildlife";
import "./JSX/space";
import Space from "./JSX/space";
import Footer from "./JSX/Footer";
import { Routes, Route, Router } from "react-router-dom";
import Sample from "./Sample";
// import { Switch } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="content">
          <div>
            <Routes>
              <Route path="/sample" element={<AboutUs />}></Route>
            </Routes>
          </div>
          <Routes>
            <Route path="/sample" element={<AboutMeContent />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={<Image />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Wildlife />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Space />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
