import React, { useState, useEffect } from "react";

import { Storage } from "aws-amplify";
import LoadingSpinner from "../LoadingSpinner";
import "./ServiceImage.css";

const ServiceImage = ({ s3Key }) => {
  const [loading, setLoading] = useState(true);
  const [imageSignedUrl, setImage] = useState();

  useEffect(() => {
    const selectFile = async () => {
      const signedUrl = await Storage.get(s3Key, { level: "public" });
      setImage(signedUrl);
      setLoading(false);
    };

    if (s3Key) {
      selectFile();
    }
  }, [s3Key]);

  if (loading) return <LoadingSpinner />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "0.5rem",
      }}
    >
      <div className="imageWrapper">
        <img
          style={{
            background: "white",
            padding: "0.5rem",
          }}
          src={imageSignedUrl}
          alt="could not display"
        />
      </div>
    </div>
  );
};

export default ServiceImage;
