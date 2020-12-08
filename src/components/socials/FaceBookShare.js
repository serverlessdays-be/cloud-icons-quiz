import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function FaceBookShare(props) {
  return (
    <FacebookShareButton
      url={"http://www.camperstribe.com"}
      quote={"CampersTribe - World is yours to explore"}
      hashtag="#camperstribe"
    >
      <FacebookIcon size={36} />
    </FacebookShareButton>
  );
}
