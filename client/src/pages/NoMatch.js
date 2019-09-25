import React from "react";
import { Col, Row, Container } from "../components/Grid";
import InnerNav from "../components/InnerNav"

function NoMatch() {
  return (
    <div>
      <InnerNav />
      <Container>
        <Row>
          <Col size="md-12">
              <h1 className="display-2 my-5 text-center">404 Page Not Found</h1>
              <h1>
                <p className="display-2 text-center" role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </p>
              </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NoMatch;