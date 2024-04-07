import React, { useState } from "react";
import "./ToggleStyle.css";



const Toggle = () => {
  const [on, setOn] = useState(false);
  
  const handleToggle = () => {
    // setOn(prev => !prev);
    setOn(!on);
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  )
};

export default Toggle;
