import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";

import { Button, Select, Image } from "antd";
import Container from "../components/Container";

import aws from "../assets/aws.jpg";
import azure from "../assets/azure.png";
import gcp from "../assets/gcp.png";

const { Option } = Select;

const WelcomePage = () => {
  const [quizName, setQuizName] = useState();
  const [img, setImg] = useState();
  const history = useHistory();

  const onClick = () => {
    history.push(`/play?quiz=${quizName}`);
  };

  const pickQuiz = (e) => {
    setQuizName(e);
  };

  useEffect(() => {
    if (!quizName) return;

    if (quizName === "aws") {
      setImg(aws);
    } else if (quizName === "azure") {
      setImg(azure);
    } else if (quizName === "gcp") {
      setImg(gcp);
    }
  }, [quizName]);

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>Hi there!</div>
          <Select
            style={{ width: "120px", margin: "1rem" }}
            placeholder={"Pick a quiz"}
            onChange={pickQuiz}
          >
            <Option value="aws">AWS</Option>
            <Option value="azure">Azure</Option>
            <Option value="gcp">GCP</Option>
          </Select>

          {quizName && (
            <>
              <Button
                style={{ display: "flex", alignItems: "center" }}
                type="primary"
                icon={<PlayCircleOutlined />}
                onClick={onClick}
              >
                Play
              </Button>
              <Image style={{ borderRadius: "40px" }} width={200} src={img} />
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default WelcomePage;
