import React from "react";
import LoadingPage from "./LoadingPage";
import UploadedSuccess from "./UploadedSuccess";
import UploadPage from "./UploadPage";
import "./Body.modules.css";
import { Route, Routes } from "react-router-dom";
const Body = () => {
  const [response, setResponse] = React.useState("");
  const changeResponse = (response) => {
    setResponse(response);
  };
  return (
    <div className="main-body">
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route
          path="/uploading"
          element={<LoadingPage responseApi={changeResponse} />}
        />
        <Route
          path="/uploaded"
          element={<UploadedSuccess response={response} />}
        />
      </Routes>
    </div>
  );
};
export default Body;
