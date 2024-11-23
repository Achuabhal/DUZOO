import React from "react";
import "./model.css";

const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12  modal-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
