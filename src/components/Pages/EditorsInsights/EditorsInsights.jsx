import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
const EditorsInsights = () => {
  return (
    <div className="border border-stone-500 p-3 mt-3">
      <h1 className="text-2xl font-bold mt-5 ">Editors Insights</h1>
      <Row xs={1} md={2} lg={3} className="g-4 mt-1">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>First time Home buyers</Card.Title>
              <Card.Text>
              Stepping into the realm of homeownership for the first time is like starting a new chapter in life's grand narrative, filled with dreams and aspirations. For first-time home buyers, every room whispers potential, and every wall holds the promise of memories yet to be made. It's not just a property they are acquiring, but a canvas for their future, painting their lives with colors of independence, stability, and enduring joy
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsights;
