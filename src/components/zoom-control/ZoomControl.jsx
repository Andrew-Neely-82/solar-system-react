import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import "./style.scss";

const ZoomControl = ({ scaleFactor, setScaleFactor }) => {
  const handleZoomIn = () => {
    const newScaleFactor = scaleFactor + 0.05;
    setScaleFactor(Math.min(Math.max(newScaleFactor, 0.01), 100));
  };

  const handleZoomOut = () => {
    const newScaleFactor = scaleFactor - 0.05;
    setScaleFactor(Math.min(Math.max(newScaleFactor, 0.01), 100));
  };

  return (
    <div className="zoom-control">
      {/* button label */}
      <span>Zoom</span>
      {/* button container */}
      <div className="btn-container">
        <div className="btn" onClick={handleZoomIn}>
          <AddIcon />
        </div>
        <div className="btn" onClick={handleZoomOut}>
          <RemoveIcon />
        </div>
      </div>
    </div>
  );
};

export default ZoomControl;
