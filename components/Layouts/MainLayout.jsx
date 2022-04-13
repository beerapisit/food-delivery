import React from "react";
import Container from "../Panel/Container";

import Header from "./Header";

const MainLayout = (props) => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="main-content">{props.children}</div>
      <Container>Footer</Container>
      <style jsx>{`
        .main-content {
          min-height: 768px;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
