import React from "react";
import Box from "./Box";
import GreenCheck from "../../assets/green-check.png";
import "./UploadedSuccess.modules.css";
const UploadedSuccess = ({ response }) => {
  const [res, setRes] = React.useState(response);
  const copyClipboard = () => navigator.clipboard.writeText(res.url);
  return (
    <Box maxWidth={600} maxHeight={750}>
      <div className="upload-sucess-container">
        <img
          src={GreenCheck}
          alt="Green Check Icon"
          className="green-check-button"
        />
        <h1>Uploaded Successefully!</h1>
        <img src={res.url} alt="Exemple" className="image-uploaded" />
        <div className="link-uploaded">
          <p>{res.url}</p>
          <button onClick={copyClipboard}>Copiar Link</button>
        </div>
      </div>
    </Box>
  );
};
export default UploadedSuccess;
