import React from "react";
import Box from "./Box";
import DropZoneButton from "./DropZoneButton";
import DropZoneCompWithImage from "./DropZoneCompWithImage";
const UploadPage = () => {
  return (
    <Box maxWidth={500} maxHeight={650}>
      <h1>Upload your image</h1>
      <h2>File should be Jpeg, Png</h2>
      <DropZoneCompWithImage noClickAccept={true} noDragAccept={false} />
      <p
        style={{
          color: "#BDBDBD",
          fontFamily: "'Poppins', sans-serif",
          marginTop: "-8px",
        }}
      >
        Or
      </p>
      <DropZoneButton />
    </Box>
  );
};

export default UploadPage;
