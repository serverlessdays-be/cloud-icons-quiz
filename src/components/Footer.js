import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Created by
          <a
            href="https://twitter.com/TheNickVanHoof"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" Nick"}
          </a>
          , hosted by
          <a
            href="https://www.meetup.com/nl-NL/ServerlessDays-Belgium/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" ServerlessDays Belgium."}
          </a>
        </p>
        <p>
          View on{" "}
          <a
            href="https://github.com/serverlessdays-be/cloud-icons-quiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </footer>
    );
  }
}

export default Footer;
