import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { Payload } from "./components/Payload";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

export interface ResultStateProps {
  valid: boolean;
}

export const VerifyPayload = () => {
  const [fields, setFields] = useState({
    payload: {
      encoded: "",
      decoded: "",
    },
  });
  const [showResult, setShowResult] = useState(false);

  const result = /^Tezos Signed Message: /.test(fields.payload.decoded);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setShowResult(true);
  };

  return (
    <Page>
      <Title>Message Signing Standards Verification</Title>
      <Form className="fw-bold mb-3" onSubmit={onSubmit}>
        <Payload
          payload={fields.payload}
          onChange={(payload) => {
            setShowResult(false);
            setFields({ ...fields, payload });
          }}
        />
        <Button variant="primary" type="submit">
          Verify
        </Button>
      </Form>

      {showResult && (
        <div>
          {result ? (
            <div className="text-success d-flex align-items-center justify-content-start gap-3">
              <BsFillCheckCircleFill />
              <strong>Valid</strong>
            </div>
          ) : (
            <div className="text-danger d-flex align-items-center justify-content-start gap-3">
              <BsFillXCircleFill />
              <strong>Invalid</strong>
            </div>
          )}
        </div>
      )}
    </Page>
  );
};
