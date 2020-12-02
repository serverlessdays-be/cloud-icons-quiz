import React, { useState, useEffect } from "react";

import { Storage } from "aws-amplify";

const ServiceImage = ({ s3Key }) => {
  const [imageSignedUrl, setImage] = useState();

  useEffect(() => {
    if (s3Key) {
      selectFile();
    }
  }, [s3Key]);

  const selectFile = async () => {
    const signedUrl = await Storage.get(s3Key, { level: "public" });
    setImage(signedUrl);
  };

  return (
    <div className="d-flex justify-content-center">
      <img src={imageSignedUrl} alt="could not display" className="img-fluid" />
    </div>
  );
};

export default ServiceImage;
