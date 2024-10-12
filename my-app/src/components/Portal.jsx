import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

const portalWrapperElm = createPortalWrapper();

const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  onClose = () => {},
  containerStyle = {},
  bodyStyle = {},
  visible = false,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 ${
        visible ? "" : "opacity-0 visible"
      } ${containerClassName}`}
      style={containerStyle}
      onClick={onClose}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-20"></div>
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        soluta rerum ratione perferendis pariatur est modi tempore laboriosam
        nostrum, corporis quam itaque sit quo recusandae, dignissimos asperiores
        dicta accusamus ipsa.
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
