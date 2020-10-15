import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const allowedFileTypes = ["image/png", "image/jpeg"];

  const onFileSelect = (e) => {
    let image = e.target.files[0];
    if (image && allowedFileTypes.includes(image.type)) {
      setFile(image);
      setError("");
    } else {
      setFile(null);
      setError("Please select a PNG or JPEG file");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={onFileSelect} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
