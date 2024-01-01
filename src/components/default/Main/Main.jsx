import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import RightNav from "../../Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav/>
          </Col>
          <Col lg={6}>

            Main
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      {/* <Outlet/> */}
      <Footer />
    </div>
  );
};

export default Main;
