import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { VerifyPayload } from "./pages/VerifyPayload";
import { SignMessage } from "./pages/SignMessage";
import { VerifySignature } from "./pages/VerifySignature";
import { NotFound } from "./pages/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerifyPayload />} />
        <Route path="/verify-signature" element={<VerifySignature />} />
        <Route path="/sign-message" element={<SignMessage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
