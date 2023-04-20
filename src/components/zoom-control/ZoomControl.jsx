import { Slider } from "@mui/material";
import { marks } from "./marks.js";
import "./style.scss";

const ZoomControl = ({ scaleFactor, setScaleFactor }) => {
  const handleZoomChange = (event, value) => {
    setScaleFactor(Math.min(Math.max(value / 100, 0.01), 100));
  };

  return (
    <div className="zoom-control">
      <span>Zoom</span>
      <div className="slider-container">
        <Slider
          value={scaleFactor * 100}
          onChange={handleZoomChange}
          min={10}
          max={1000}
          step={1}
          orientation="horizontal"
          aria-labelledby="slider-zoom-control"
          marks={marks}
          defaultValue={1}
          sx={{ width: "300px" }}
        />
      </div>
    </div>
  );
};

export default ZoomControl;
