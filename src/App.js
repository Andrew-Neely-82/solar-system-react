import { useState, useRef } from "react";
import { Navbar, ZoomControl } from "./components/index.js";
import "./App.scss";

function App() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const solarSystemRef = useRef(null); // Create a ref for the solar-system div

  return (
    <>
      <Navbar />
      <ZoomControl scaleFactor={scaleFactor} setScaleFactor={setScaleFactor} />
      <div className="solar-system" style={{ transform: `scale(${scaleFactor})`, transformOrigin: "top left" }}>
        {/* the sun */}

        <div id="sun" className="sun-container">
          <span className="name-tag">The Sun</span>
          <div className="sun"></div>
        </div>

        {/* the planets */}
        <div id="mercury" className="mercury-container">
          <span className="name-tag">Mercury</span>
          <div className="mercury"></div>
        </div>

        <div id="venus" className="venus-container">
          <span className="name-tag">Venus</span>
          <div className="planet venus"></div>
        </div>

        <div id="earth" className="earth-container">
          <span className="name-tag">Earth</span>
          <div className="planet earth"></div>
        </div>

        <div id="mars" className="mars-container">
          <span className="name-tag">Mars</span>
          <div className="planet mars"></div>
        </div>

        <div id="jupiter" className="jupiter-container">
          <span className="name-tag">Jupiter</span>
          <div className="planet jupiter"></div>
        </div>

        <div id="saturn" className="saturn-container">
          <span className="name-tag">Saturn</span>
          <div className="planet saturn"></div>
        </div>

        <div id="uranus" className="uranus-container">
          <span className="name-tag">Uranus</span>
          <div className="planet uranus"></div>
        </div>

        <div id="neptune" className="neptune-container">
          <span className="name-tag">Neptune</span>
          <div className="planet neptune"></div>
        </div>
        {/* end of planets */}
      </div>
    </>
  );
}

export default App;
