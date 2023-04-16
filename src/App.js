import { useState } from "react";
import { Navbar, ZoomControl } from "./components/index.js";
import "./App.scss";

function App() {
  const [scaleFactor, setScaleFactor] = useState(1);

  return (
    <>
      <Navbar />
      <br />
      <ZoomControl scaleFactor={scaleFactor} setScaleFactor={setScaleFactor} />
      <div className="zoom-container" style={{ transform: `scale(${scaleFactor})` }}>
        <div className="solar-system">
          {/* the sun */}

          <section id="sun" className="sun-container">
            <span className="name-tag">The Sun</span>
            <div className="sun"></div>
          </section>

          {/* the planets */}
          <section id="mercury" className="planet-container">
            <span className="name-tag">Mercury</span>
            <div className="planet mercury"></div>
          </section>

          <section id="venus" className="planet-container">
            <span className="name-tag">Venus</span>
            <div className="planet venus"></div>
          </section>

          <section id="earth" className="planet-container">
            <span className="name-tag">Earth</span>
            <div className="planet earth"></div>
          </section>

          <section id="mars" className="planet-container">
            <span className="name-tag">Mars</span>
            <div className="planet mars"></div>
          </section>

          <section id="jupiter" className="planet-container">
            <span className="name-tag">Jupiter</span>
            <div className="planet jupiter"></div>
          </section>

          <section id="saturn" className="planet-container">
            <span className="name-tag">Saturn</span>
            <div className="planet saturn"></div>
          </section>

          <section id="uranus" className="planet-container">
            <span className="name-tag">Uranus</span>
            <div className="planet uranus"></div>
          </section>

          <section id="neptune" className="planet-container">
            <span className="name-tag">Neptune</span>
            <div className="planet neptune"></div>
          </section>
          {/* end of planets */}
        </div>
      </div>
    </>
  );
}

export default App;
