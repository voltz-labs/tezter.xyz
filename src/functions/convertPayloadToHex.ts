export const convertPayloadToHex = (payload: string) => {
  if (payload.length >= 12) {
    payload.slice(12);
  }

  return payload;
};
