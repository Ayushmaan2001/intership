import "./App.css";
import Navbar from "./JSX/Navbar";
import AboutMeContent from "./JSX/AboutMeContent";
import AboutUs from "./JSX/About_me";
import Image from "./JSX/Image";
import Wildlife from "./JSX/Wildlife";
import "./JSX/space";
import Space from "./JSX/space";
import Footer from "./JSX/Footer";
import {Routes, Route} from "react-router-dom";
import Sample from "./Sample";
import Nature_Main from "./JSX/Nature_Main";
import Wildlife_Main from "./JSX/Wildlife_Main";
import Stars_Main from "./JSX/Stars_Main";

function App() {
  return (
    <>
      <Navbar />
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
      <Routes>
        <Route path="/contact_us" element={<Sample />}></Route>
        <Route path="/Nature_Main" element={<Nature_Main />}></Route>
        <Route path="/Wildlife_Main" element={<Wildlife_Main />}></Route>
        <Route path="/Stars_Main" element={<Stars_Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
