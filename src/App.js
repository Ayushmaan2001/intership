import "./App.css";
import Navbar from "./JSX/Navbar";
import AboutMeContent from "./JSX/AboutMeContent";
import AboutUs from "./JSX/About_me";
import Image from "./JSX/Image";
import Wildlife from "./JSX/Wildlife";
import './JSX/space'
import Space from "./JSX/space";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="content">
          <div>
            <AboutUs />
          </div>
          <AboutMeContent />
        </div>
        <div className="text-center">
          Kashmir
        </div>
        <Image />
        <div className="text-center">
          WildLife
        </div>
        <Wildlife/>
        <div className="text-center">
          Space/Stars
        </div>
        <Space/>
      </div>

      <div className="sample">s</div>
    </>
  );
}

export default App;
