import React from "react";

const Container = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      padding: "50px 100px",
    }}
  >
    {children}
  </div>
);

export default Container;
