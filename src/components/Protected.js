import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify/";
import Storage from "@aws-amplify/storage";
import Container from "./Container";
import { createService } from "../graphql/mutations";
import protectedRoute from "./protectedRoute";
import { Form } from "semantic-ui-react";
import { Input, Button } from "antd";

const initialState = {
  notes: [],
  form: { name: "", description: "" },
};

function Protected(props) {
  const [form, setForm] = useState({ icon: "", serviceName: "" });
  const [uploading, setUploading] = useState(false);

  const styles = {
    container: { padding: 20 },
    input: { marginBottom: 10 },
    item: { textAlign: "left" },
    p: { color: "#1890ff" },
  };

  const uploadFile = async (file) => {
    const fileName = "icons/" + form.serviceName;

    const result = await Storage.put(fileName, file);

    setForm({ ...form, icon: result.key });

    console.log("Uploaded file: ", result);
  };

  const upload = async (e) => {
    console.log("Uploading image..");
    setUploading(true);

    let files = [];
    for (var i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files.item(i));
    }
    await Promise.all(files.map((f) => uploadFile(f)));

    setUploading(false);
  };

  async function addNote() {
    if (!form.icon || !form.serviceName) {
      return alert("please enter a name and description");
    }
    try {
      // TODO: check other way of syntax
      await API.graphql(graphqlOperation(createService, { input: form }));
      console.log("successfully created service entry!");
      setForm(initialState.form);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  function onChange(e) {
    if (e.target.name === "icon") {
      setForm({ ...form, icon: e.target.value });
    } else if (e.target.name === "serviceName") {
      setForm({ ...form, serviceName: e.target.value });
    }
  }

  return (
    <Container>
      <div style={styles.container}>
        <Input
          onChange={onChange}
          name="serviceName"
          placeholder="Service Name"
          style={styles.input}
        />
      </div>
      <div>
        <Form.Button
          onClick={() =>
            document.getElementById("add-image-file-input").click()
          }
          disabled={uploading}
          icon="file image outline"
          content={uploading ? "Uploading..." : "Add Image"}
        />
        <input
          id="add-image-file-input"
          type="file"
          accept="image/*"
          multiple
          onChange={upload}
          style={{ display: "none" }}
        />
      </div>
      <div style={styles.container}>
        <Input
          onChange={onChange}
          value={form.icon}
          placeholder="Service icon"
          name="icon"
          style={styles.input}
        />
        <Button onClick={addNote} type="primary">
          Create
        </Button>
      </div>
    </Container>
  );
}

export default protectedRoute(Protected);
