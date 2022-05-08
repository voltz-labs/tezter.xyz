import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-secondary shadow py-3 text-white">
      <Container>
        <span className="text-light">
          Warning - This is application is in beta testing. It is also entirely
          free and open source, use at your own risk. No guarantees are given or
          implied
        </span>
      </Container>
    </footer>
  );
};
