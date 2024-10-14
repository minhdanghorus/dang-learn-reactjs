import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const TooltipAdvanced = ({ title, children }) => {
  const [visible, setVisible] = React.useState(false);
  const [coordinates, setCoordinates] = React.useState({});
  const handleMouseEnter = (e) => {
    setCoordinates(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = (e) => {
    setVisible(false);
  };
  return (
    <div className="ml-5 inline-block">
      <CSSTransition in={visible} timeout={300} unmountOnExit classNames="fade">
        {(status) => (
          <Portal visible={status !== "exited"}>
            <div
              className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full max-w-[200px] -translate-x-2/4"
              style={{
                top: coordinates.top - coordinates.height / 2 + window.scrollY,
                left: coordinates.left + coordinates.width / 2,
              }}
            >
              <span>{children}</span>
            </div>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvanced;
