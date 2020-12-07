import React, { useState, useEffect } from "react";

import { Form, Input, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { API, graphqlOperation } from "aws-amplify/";
import Storage from "@aws-amplify/storage";
import { createService } from "../graphql/mutations";

import protectedRoute from "./protectedRoute";
import Container from "./Container";
import CloudProvider from "../model/cloudProvider";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

function dummyRequest({ file, onSuccess }) {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
}

async function addService(service) {
  if (!service.icon || !service.serviceName) {
    return alert("please enter a name and description");
  }
  try {
    // TODO: check other way of syntax
    await API.graphql(graphqlOperation(createService, { input: service }));
    console.log("successfully created service entry!");
  } catch (error) {
    console.log("error: ", error);
  }
}

function uploadNewQuestion() {
  const [form] = Form.useForm();

  const submitForm = async (values) => {
    console.dir(values);
    const result = await Storage.put(
      "icons/" + values.serviceName,
      values.upload[0].originFileObj
    );
    const key = result.key;
    let { upload, ...data } = values;
    data = { ...data, icon: key };
    console.log(`data is ${JSON.stringify(data)}`);
    await addService(data);

    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: false,
        }}
        onFinish={submitForm}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          label="Service name"
          name="serviceName"
          rules={[
            {
              required: true,
              message: "Please input the name of the service!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="cloudProviderId"
          label="Cloud provider"
          rules={[
            {
              required: true,
              message: "Please input the cloud provider!",
            },
          ]}
        >
          <Select placeholder="Select cloud provider">
            <Select.Option value={CloudProvider.AWS}>
              {CloudProvider.AWS}
            </Select.Option>
            <Select.Option value={CloudProvider.AZURE}>
              {CloudProvider.AZURE}
            </Select.Option>
            <Select.Option value={CloudProvider.GCP}>
              {CloudProvider.GCP}
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="logo"
            customRequest={dummyRequest}
            listType="picture"
            progress={{ showInfo: false }}
            multiple={false}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

// export default protectedRoute(uploadNewQuestion);
export default protectedRoute(uploadNewQuestion);
