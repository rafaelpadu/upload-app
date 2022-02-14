import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "./Box";
import "./LoadingPage.modules.css";
import api from "../../utils/api";
import { FormDataContext } from "../../App";
import { toast } from "react-toastify";

const LoadingPage = ({ responseApi }) => {
  const { formData } = React.useContext(FormDataContext);
  const navigate = useNavigate();
  const postData = async () => {
    try {
      let response = await api.post("/post", formData, {
        "Content-Type": "multipart/form-data",
      });
      console.log(response);
      const responseData = await response.data;
      responseApi(responseData);
      toast.success("Upload realizado com sucesso!");
      navigate("/uploaded");
    } catch (err) {
      toast.error(err.response.data.message);
      navigate("/");
    }
  };
  React.useEffect(() => {
    postData();
  }, []);

  return (
    <Box maxHeight={190} maxWidth={405}>
      <div className="loading-container">
        <h1>Uploading...</h1>
        <div>
          <div />
        </div>
      </div>
    </Box>
  );
};
export default LoadingPage;
