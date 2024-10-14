import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Protypes from "prop-types";

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
  children,
  overlay = true,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div
      className={containerClassName}
      style={containerStyle}
      onClick={onClose}
    >
      {overlay && (
        <div className="overlay absolute inset-0 bg-black bg-opacity-20"></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

Portal.propTypes = {
  containerClassName: Protypes.string,
  bodyClassName: Protypes.string,
  onClose: Protypes.func,
  containerStyle: Protypes.object,
  bodyStyle: Protypes.object,
//   visible: Protypes.bool.isRequired,
  children: Protypes.node,
  overlay: Protypes.bool,
};

export default Portal;
