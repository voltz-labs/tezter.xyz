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

export interface ResultStateProps {
  prefix: string | null;
  domain: string | null;
  timestamp: string | null;
}

export const VerifyPayload = () => {
  const [fields, setFields] = useState({
    payload: {
      encoded: "",
      decoded: "",
    },
  });
  const [result, setResult] = useState<ResultStateProps | null>(null);

  const regexes = {
    prefix: /^(?<prefix>Tezos Signed Message:)\s/,
    domain:
      /^(?<prefix>Tezos Signed Message:)\s.*\b(?<domain>(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,})\b/,
    timestamp:
      /^(?<prefix>Tezos Signed Message:)\s.*\b(?<timestamp>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z)\b/,
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const prefix =
      fields.payload.decoded.match(regexes.prefix)?.groups?.prefix || null;

    const domain =
      fields.payload.decoded.match(regexes.domain)?.groups?.domain || null;

    const timestamp =
      fields.payload.decoded.match(regexes.timestamp)?.groups?.timestamp ||
      null;

    setResult({
      prefix,
      domain,
      timestamp,
    });
  };

  return (
    <Page>
      <Title>Message Signing Standards Verification</Title>
      <Form className="fw-bold mb-3" onSubmit={onSubmit}>
        <Payload
          payload={fields.payload}
          onChange={(payload) => {
            setResult(null);
            setFields({ ...fields, payload });
          }}
        />
        <Button variant="primary" type="submit">
          Verify
        </Button>
      </Form>

      {result && (
        <div>
          {result &&
          result.prefix != null &&
          result.domain != null &&
          result.timestamp != null ? (
            <div>
              <div className="text-success d-flex align-items-center justify-content-start gap-3 mb-3">
                <BsFillCheckCircleFill />
                <strong>Valid</strong>
              </div>
              <strong>
                Complies with all necessary and recommended standards
              </strong>
              <ul>
                <li>Includes necessary prefix ("{result.prefix}")</li>
                <li>Includes recommended domain ("{result.domain}")</li>
                <li>Includes recommended timestamp ("{result.timestamp}")</li>
              </ul>
            </div>
          ) : result.prefix != null ? (
            <div>
              <div className="text-warning d-flex align-items-center justify-content-start gap-3">
                <BsFillDashCircleFill />
                <strong>Valid Prefix</strong>
              </div>
              <strong>Complies with all necessary standards</strong>
              <ul>
                <li>Includes necessary prefix ("{result.prefix}")</li>
                <li>
                  {result.domain
                    ? `Includes recommended domain ("${result.domain}")`
                    : "Missing recommended domain"}
                </li>
                <li>
                  {result.timestamp
                    ? `Includes recommended timestamp ("${result.timestamp}")`
                    : "Missing recommended timestamp"}
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <div className="text-danger d-flex align-items-center justify-content-start gap-3">
                <BsFillXCircleFill />
                <strong>Invalid</strong>
              </div>
              <strong>Warning, does not comply with necessary standards</strong>
            </div>
          )}
        </div>
      )}
    </Page>
  );
};
