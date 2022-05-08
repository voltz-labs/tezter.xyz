import { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";
import { convertHexToString } from "../../../functions/convertHexToString";
import { convertStringToHex } from "../../../functions/convertStringToHex";
import { convertHexToPayload } from "../../../functions/convertHexToPayload";
import { convertPayloadToHex } from "../../../functions/convertPayloadToHex";

export interface PayloadInput {
  encoded: string;
  decoded: string;
}

export interface PayloadProps {
  payload: PayloadInput;
  onChange: (payload: PayloadInput) => void;
}

export const Payload = ({ payload, onChange }: PayloadProps) => {
  const [format, setFormat] = useState<"decoded" | "encoded">("decoded");

  const toggleFormat = () =>
    setFormat((format) => (format === "encoded" ? "decoded" : "encoded"));

  return (
    <FormGroup className="mb-3">
      <div className="d-flex justify-content-between">
        <FormLabel htmlFor="payload">
          Payload ({format === "encoded" ? "Encoded" : "Decoded"}){" "}
        </FormLabel>
        <Button variant="link" size="sm" onClick={toggleFormat}>
          View {format === "encoded" ? "Decoded" : "Encoded"}
        </Button>
      </div>
      <FormControl
        id="payload"
        name="payload"
        as="textarea"
        placeholder="Paste the content of your payload here..."
        rows={7}
        value={format === "encoded" ? payload.encoded : payload.decoded}
        onChange={(e) => {
          if (format === "encoded") {
            onChange({
              encoded: e.target.value,
              decoded: convertHexToString(convertPayloadToHex(e.target.value)),
            });

            return;
          }

          onChange({
            decoded: e.target.value,
            encoded: convertHexToPayload(convertStringToHex(e.target.value)),
          });
        }}
      />
      <FormText className="text-muted text-break">
        {format === "encoded" ? payload.decoded : payload.encoded}
      </FormText>
    </FormGroup>
  );
};
