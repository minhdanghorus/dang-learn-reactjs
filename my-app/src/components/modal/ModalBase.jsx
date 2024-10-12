import React from "react";
import Portal from "../Portal";

const ModalBase = ({ visible, onClose, children }) => {
  if (!visible) return null;
  return (
    <>
      <Portal visible={visible} onClose={onClose} containerClassName="flex items-center justify-center">
        {children}
      </Portal>
    </>
  );
};

export default ModalBase;
