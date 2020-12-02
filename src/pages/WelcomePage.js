import React from "react";
import { Link } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const WelcomePage = () => {
  return (
    <div>
      <div>Hi there!</div>
      <Button>
        <Link to="/play">
          <PlayCircleOutlined />
          Play
        </Link>
      </Button>
    </div>
  );
};

export default WelcomePage;
