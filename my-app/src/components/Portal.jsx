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
  visible: Protypes.bool.isRequired,
  children: Protypes.node,
};

export default Portal;
