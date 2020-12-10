import React, { useState, useEffect } from "react";

import { TwitterShareButton, TwitterIcon } from "react-share";

const TwitterShare = ({ score, quiz }) => {
  const [
    cloudProviderTwitterHandle,
    setCloudProviderTwitterHandle,
  ] = useState();
  useEffect(() => {
    const handle =
      quiz === "aws" ? "@awscloud" : quiz === "azure" ? "@Azure" : "@GCPcloud";
    setCloudProviderTwitterHandle(handle);
  }, [quiz]);

  return (
    <TwitterShareButton
      title={`I completed the Serverless Icon Quiz for ${cloudProviderTwitterHandle} with a score of: ${score}/10! By @ServerlessBEL`}
      url={"https://quiz.serverlessdays.be"}
      hashtags={["serverless", "cloud"]}
    >
      <TwitterIcon size={36} round />
    </TwitterShareButton>
  );
};

export default TwitterShare;
