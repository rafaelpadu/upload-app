import React from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import "./DropZone.modules.css";
import api from "../../utils/api";
import { FormDataContext } from "../../App";

const DropZoneButton = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = React.useContext(FormDataContext);
  const onDrop = React.useCallback(async (acceptFiles) => {
    const formData = new FormData();

    formData.append("file", acceptFiles[0]);
    setFormData(formData);
    navigate("/uploading");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, noDrag: true });

  return (
    <button className="btn-drop-zone">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Choose a file</p>
      </div>
    </button>
  );
};

export default DropZoneButton;
