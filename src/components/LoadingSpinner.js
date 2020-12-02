import React from "react";
import { Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <div
      className="spinnerBox"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Spin />
    </div>
  );
};

export default LoadingSpinner;
