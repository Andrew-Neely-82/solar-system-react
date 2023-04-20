import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from "./planets/export.js";
import { Navbar, ZoomControl } from "./components/index.js";
import { BrowserRouter } from "react-router-dom";
import { useState, useRef } from "react";
import "./App.scss";

function App() {
  const [scaleFactor, setScaleFactor] = useState(1);
  // scaleFactor stores the current scale factor of the solar system (default is 1).
  // setScaleFactor updates the scaleFactor value in response to user input.
  const [isDragging, setIsDragging] = useState(false);
  // This code initializes a state variable called isDragging with a value of false.
  // It is used to keep track of whether the user is currently dragging an element on the screen.
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const solarSystemRef = useRef(null); // Create a ref for the solar-system div

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartCoords({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const dx = event.clientX - startCoords.x;
      const dy = event.clientY - startCoords.y;
      const scaleFactorX = solarSystemRef.current.offsetWidth / solarSystemRef.current.scrollWidth;
      const scaleFactorY = solarSystemRef.current.offsetHeight / solarSystemRef.current.scrollHeight;
      setOffset((prevOffset) => ({
        x: prevOffset.x + (dx * scaleFactorX) / scaleFactor,
        y: prevOffset.y + (dy * scaleFactorY) / scaleFactor,
      }));
      setStartCoords({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // set default mouse dragging to false
  };

  return (
    <BrowserRouter>
      <Navbar />
      <ZoomControl scaleFactor={scaleFactor} setScaleFactor={setScaleFactor} solarSystemRef={solarSystemRef} offset={offset} setOffset={setOffset} />
      <div
        className="solar-system"
        style={{
          transform: `scale(${scaleFactor}) translate(${offset.x}px, ${offset.y}px)`,
          transformOrigin: "center center",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        ref={solarSystemRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
        {/* the sun */}
        <div id="sun" className="sun-container">
          <span className="name-tag">The Sun</span>
          <div className="sun"></div>
        </div>

        {/* the planets */}
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </div>
    </BrowserRouter>
  );
}

export default App;
