import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";

import { Button, Select, Image, PageHeader } from "antd";
import Container from "../components/Container";

import aws from "../assets/aws.jpg";
import azure from "../assets/azure.png";
import gcp from "../assets/gcp.png";
import cloudIcon from "../assets/cloud-icon.png";

import "./WelcomePage.css";

import {
  QuestionCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

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
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          title="Serverless Quiz"
          subTitle="Pick a quiz that you want to play"
          avatar={{ src: QuestionCircleOutlined }}
          ghost={false}
          style={{ margin: "0 1rem 0 1rem" }}
        />
      </div>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!quizName && <ArrowDownOutlined style={{ fontSize: "2rem" }} />}
          <Select
            size="large"
            style={{ width: "120px", margin: "1rem" }}
            placeholder={"Pick quiz"}
            onChange={pickQuiz}
          >
            <Option value="aws">AWS</Option>
            <Option value="azure">Azure</Option>
            <Option value="gcp">GCP</Option>
          </Select>

          {!quizName && <ArrowUpOutlined style={{ fontSize: "2rem" }} />}

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
          {!quizName && (
            <Image style={{ padding: "0.5rem" }} width={200} src={cloudIcon} />
          )}
        </div>
      </Container>
    </>
  );
};

export default WelcomePage;
