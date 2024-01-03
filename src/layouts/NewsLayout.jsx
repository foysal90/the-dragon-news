import React from "react";
import Header from "../components/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../components/Shared/RightNav/RightNav";
import Footer from "../components/Shared/Footer/Footer";
import News from "../components/Shared/News/News";

const NewsLayout = () => {
  return (
    <div>
      <Header />

      <Container className="mt-5">
        <Row>
          <Col lg={9}>
            <Outlet />
           {/* <News/> */}
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

export default NewsLayout;
