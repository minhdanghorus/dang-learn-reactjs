import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={`content relative z-10 ${bodyClassName}`}
            containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
