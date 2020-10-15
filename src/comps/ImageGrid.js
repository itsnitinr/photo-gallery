import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            onClick={() => setSelectedImage(doc.url)}
            key={doc.id}
          >
            <img src={doc.url} alt="Uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
