import {
  BYTE_INDICATOR_HEX_BYTE_STRING,
  BYTE_INDICATOR_MICHELINE_EXPRESSION,
} from "../utils/constants";
import { convertNumberToHex } from "./convertNumberToHex";

export const convertHexToPayload = (encoded: string) => {
  if (!encoded.length) {
    return "";
  }

  const length = convertNumberToHex(encoded.length);

  return (
    BYTE_INDICATOR_MICHELINE_EXPRESSION +
    BYTE_INDICATOR_HEX_BYTE_STRING +
    length +
    encoded
  );
};
