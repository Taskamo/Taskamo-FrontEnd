import { GetProfileApi } from "@/api/list";
import SvgEdit2 from "@/assets/icons/Edit2";
import {
  Avatar,
  Badge,
  Modal,
  Upload,
  message,
  Form,
  Input,
  Button,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import "./style.scss";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import Axios from "@/api/axios";

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const Navbar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>();
  const { data, refetch } = useQuery({
    queryFn: () => GetProfileApi(),
  });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = useMemo(() => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }, [time]);

  const handleCancel = () => {
    setIsProfileModalOpen(false);
  };

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setIsLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setIsLoading(false);
        setImageUrl(url);
      });
      setProfileImage(info.file);
    }
  };

  const onFinish = (values: any) => {
    let formData = new FormData();
    formData.append("profile", profileImage.originFileObj);
    formData.append("name", values.name);
    formData.append("_method", "PUT");
    Axios.post("/profile", formData).then((res) => {
      setIsProfileModalOpen(false);
      refetch();
    });
  };

  return (
    <>
      <Modal
        open={isProfileModalOpen}
        title="Update your profile"
        onCancel={handleCancel}
        footer={null}
      >
        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl || data?.profile ? (
            <img
              src={imageUrl || data?.profile}
              alt="avatar"
              style={{ width: "100%" }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <nav className="navbar">
        <section>
          <p className="text-sm text-gray-400">
            {String(new Date().getFullYear())}
          </p>
          <p className="text-sm">
            {String(
              new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
              })
            )}
          </p>
        </section>
        <section>
          <p className="text-xl	">{formattedTime}</p>
        </section>
        <section className="flex gap-4 items-center">
          <div className="flex flex-col">
            <p className="text-sm text-right">{data?.name}</p>
            <p className="text-sm text-right">{data?.email}</p>
          </div>
          <Badge
            offset={[4, 24]}
            count={<SvgEdit2 className="!scale-50 !stroke-primaryA500" />}
          >
            {data?.profile ? (
              <Avatar
                onClick={() => setIsProfileModalOpen(true)}
                className="cursor-pointer"
                shape="square"
                src={`http://api.taskamo.com/profile/${data?.profile}`}
                size="large"
              />
            ) : (
              <Avatar
                onClick={() => setIsProfileModalOpen(true)}
                className="cursor-pointer"
                shape="square"
                size="large"
              />
            )}
          </Badge>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
