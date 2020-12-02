import React, { useState, useEffect } from "react";

import { Storage } from "aws-amplify";
import LoadingSpinner from "../LoadingSpinner";

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
    <div className="d-flex justify-content-center">
      <img src={imageSignedUrl} alt="could not display" className="img-fluid" />
    </div>
  );
};

export default ServiceImage;
