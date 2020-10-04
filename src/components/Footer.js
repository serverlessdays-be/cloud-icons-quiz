import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Hosted with AWS Amplify by{" "}
          <a
            href="https://www.meetup.com/nl-NL/ServerlessDays-Belgium/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ServerlessDays Belgium
          </a>
          . Sept 30th!
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
