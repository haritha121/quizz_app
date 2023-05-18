import React, { useEffect, useRef } from "react";

const Toast = (props) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.style.display = "none";
    }
  }, []);

  const hideScreen = () => {
    if (toastRef.current) {
      toastRef.current.style.display = "block";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
  };

  const showScreen = () => {
    if (toastRef.current) {
      toastRef.current.style.display = "none";
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
  };

  let theChild = undefined;
  if (props.model === true) {
    hideScreen();
  } else {
    showScreen();
  }

  theChild = (
    <div
      ref={toastRef}
      style={{
        overflow: "scroll",
        position: "absolute",
        top: "15px",
        right: "15px",
        zIndex: props.zIndex ? props.zIndex : 20,
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "#30D158",
        width: "fit-content",
        color: "white",
        borderRadius: "5px",
        padding: "20px 30px",
      }}
    >
      {props.message}
    </div>
  );

  return <div>{theChild}</div>;
};

export default Toast;
