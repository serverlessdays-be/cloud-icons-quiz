import React, { useState, useEffect } from "react";
import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";

import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, FileProtectOutlined } from "@ant-design/icons";

import { AmplifySignOut } from "@aws-amplify/ui-react";

const Nav = (props) => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    let updateUser = async (authState) => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser); // cleanup
  }, []);

  const { current } = props;
  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a
            href="https://www.meetup.com/nl-NL/ServerlessDays-Belgium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>ServerlessDaysBE!</strong>
          </a>
        </Menu.Item>
        {user && (
          <>
            <Menu.Item key="createQuestion">
              <Link to="/question/new">
                <FileProtectOutlined />
                Create Question
              </Link>
            </Menu.Item>
            <Menu.Item key="signout">
              <AmplifySignOut />
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Nav;
