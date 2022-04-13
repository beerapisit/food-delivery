import React from "react";

export const Container = (props) => {
  return (
    <div style={{ paddingRight: "8rem", paddingLeft: "8rem" }}>
      {props.children}
    </div>
  );
};

export default Container;
