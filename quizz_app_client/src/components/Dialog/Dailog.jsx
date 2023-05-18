import React, { useEffect, useRef } from "react";
import "./Dailog.css";
const Dialog = (props) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
    }
  }, []);

  const hideScreen = () => {
    if (modalRef.current) {
      modalRef.current.style.display = "flex";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  };

  const showScreen = () => {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (props.model === true) {
      hideScreen();
    } else {
      showScreen();
    }
  }, [props.model]);

  return (
    <div>
      <div ref={modalRef} className="modal-container">
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Dialog;
