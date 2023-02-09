import axios from "axios";
import React, { useState } from "react";
import { Button, Space, Form, Input } from "antd";
import "./Login.css";

const Login = ({ token, setToken }) => {
  // const nameInputRef = useRef();
  // const passInputRef = useRef();
  const [error, setError] = useState("");

  // useEffect(() => {
  //   nameInputRef.current.value = "";
  //   passInputRef.current.value = "";
  // }, []);

  const loginHandler = (values) => {
    console.log("blah");
    localStorage.setItem("isLogin", "1");
    // const enteredName = nameInputRef.current.value;
    // const enteredPass = passInputRef.current.value;
    const enteredName = values.username;
    const enteredPass = values.password;
    console.log(enteredName, enteredPass);

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: enteredName,
        password: enteredPass,
      },
    })
      .then((res) => {
        console.log(res);
        setToken(res.data.token);
        console.log(token);
        localStorage.setItem("userToken", token);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };
  return (
    <div className="container">
      <Form
        className="form"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={loginHandler}
      >
        <Form.Item name="username">
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        {error && <p>{error}</p>}
        <Form.Item>
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
