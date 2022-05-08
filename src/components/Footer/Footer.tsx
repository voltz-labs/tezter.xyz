import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Container className="text-light my-4">
        <Row>
          <Col className="d-flex align-items-center justify-content-center my-2">
            <a
              className="btn btn-primary"
              href="https://t.me/TezterXYZ"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </Col>
          <Col className="d-flex align-items-center justify-content-center my-2">
            <a
              href="https://github.com/voltz-labs/tezter.xyz"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Col>
          <Col className="d-flex align-items-center justify-content-center my-2">
            <a
              href="https://forum.tezosagora.org/t/new-tzip-draft-string-signing/4534"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Standards Participation
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary shadow py-3 text-white">
        <Container>
          <span className="fs-5 text-light">
            Warning - This is application is in beta testing. It is also
            entirely free and open source, use at your own risk. No guarantees
            are given or implied
          </span>
        </Container>
      </div>
    </footer>
  );
};
