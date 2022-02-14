import React from "react";
import { useDropzone } from "react-dropzone";
import "./DropZone.modules.css";
import { ReactComponent as ComponentImage } from "../../assets/image.svg";
import { useNavigate } from "react-router-dom";
import { FormDataContext } from "../../App";

const DropZoneCompWithImage = ({ noClickAccept, noDragAccept }) => {
  const navigate = useNavigate();
  const { formData, setFormData } = React.useContext(FormDataContext);
  const onDrop = React.useCallback(async (acceptFiles) => {
    const formData = new FormData();
    console.log("Teste");
    formData.append("file", acceptFiles[0]);
    setFormData(formData);
    navigate("/uploading");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: noClickAccept,
    noDrag: noDragAccept,
  });

  return (
    <div {...getRootProps()} className="dropzone-container">
      <ComponentImage
        style={{ width: "165px", height: "165px", margin: "1.5rem 0" }}
      />
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drag and Drop your image here</p>
      ) : (
        <p className="dropzone-container-paragraph">
          Drag & Drop your image here
        </p>
      )}
    </div>
  );
};
export default DropZoneCompWithImage;
