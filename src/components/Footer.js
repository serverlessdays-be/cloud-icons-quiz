import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

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
            {" Nick "}
          </a>
          and
          <a
            href="https://twitter.com/drissamri88"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" Driss"}
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
        {/* <p>
          View on
          <a
            href="https://github.com/serverlessdays-be/cloud-icons-quiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p> */}
      </footer>
    );
  }
}

export default Footer;
