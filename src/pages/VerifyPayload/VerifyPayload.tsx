import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { Payload } from "./components/Payload";
import {
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";

export const VerifyPayload = () => {
  const [fields, setFields] = useState({
    payload: {
      encoded: "",
      decoded: "",
    },
  });
  const [showResult, setShowResult] = useState(false);

  const hasPrefix = /^Tezos Signed Message:( |$)/.test(fields.payload.decoded);
  const isValid =
    /^(?<prefix>Tezos Signed Message:) (?<domain>(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}) (?<timestamp>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z)( |$)/.test(
      fields.payload.decoded
    );

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
          {isValid ? (
            <div className="text-success d-flex align-items-center justify-content-start gap-3">
              <BsFillCheckCircleFill />
              <strong>Valid</strong>
            </div>
          ) : hasPrefix ? (
            <div className="text-warning d-flex align-items-center justify-content-start gap-3">
              <BsFillDashCircleFill />
              <strong>Valid Prefix</strong>
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
