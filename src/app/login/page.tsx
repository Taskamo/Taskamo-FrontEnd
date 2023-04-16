"use client";

import { Button, Divider, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { PostLoginApi } from "@/api/list";
import { useMutation, useQuery } from "react-query";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  const router = useRouter();
  const { mutate } = useMutation((data: { email: string; password: string }) =>
    PostLoginApi(data)
  );
  const onFinish = (values: any) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    mutate(data, {
      onSuccess(data) {
        setCookies("token", data.data.token);
        router.replace("/dashboard");
      },
      onError(error) {
        console.log(data);
      },
    });
  };

  return (
    <div className="h-screen w-full flex flex-row justify-center items-center">
      <div className="max-w-lg w-full">
        <h1 className="text-4xl">Login</h1>
        <Divider className="border-white" />
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div className="flex flex-col gap-2">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
              <Button size="large" type="ghost" className="login-form-button">
                Register
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
