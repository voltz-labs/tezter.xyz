import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";

export const VerifyPayload = () => {
  return (
    <Page>
      <Title>Message Signing Standards Verification</Title>
      <Form className="fw-bold">
        <FormGroup className="mb-3">
          <div className="d-flex justify-content-between">
            <FormLabel htmlFor="payload">Payload (Plain Text) </FormLabel>
            <Button variant="link" size="sm">
              View Encoded
            </Button>
          </div>
          <FormControl
            id="payload"
            name="payload"
            as="textarea"
            placeholder="Paste the content of your payload here..."
            rows={7}
          />
        </FormGroup>

        <Button variant="primary" type="submit">
          Verify
        </Button>
      </Form>
    </Page>
  );
};
