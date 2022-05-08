import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { VerifyPayload } from "./pages/VerifyPayload";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerifyPayload />} />
      </Routes>
    </BrowserRouter>
  );
};
