"use client";

import {
  CreateEventApi,
  DeleteEventApi,
  GetAllEventsApi,
  UpdateEventApi,
  UpdateTodoApi,
} from "@/api/list";
import SvgAdd from "@/assets/icons/Add";
import {
  Button,
  DatePicker,
  FloatButton,
  Form,
  Input,
  message,
  Modal,
} from "antd";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function EventsPage() {
  const { data, isLoading, refetch } = useQuery(["events"], () =>
    GetAllEventsApi()
  );
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"create" | "update">("create");
  const [messageApi, contextHolder] = message.useMessage();

  const EventComponent = ({
    id,
    date_ago,
    day,
    month,
    title,
    deleteFn,
    date,
  }: {
    id: string;
    date_ago: string;
    day: string;
    month: string;
    title: string;
    date: string;
    deleteFn: ({ id }: { id: string }) => void;
  }) => {
    return (
      <div className="p-2 rounded bg-boxgroundA100 gap-2 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div className="w-10 h-10 bg-boxgroundA100 flex items-center justify-center rounded">
              {day}
            </div>
            <p>{month}</p>
          </div>
          <p>{date_ago}</p>
        </div>
        <p>{title}</p>
        <div className="flex gap-2">
          <Button onClick={() => deleteFn({ id })} type="text" danger>
            Delete
          </Button>
          <Button
            onClick={() => {
              form.setFieldsValue({
                title,
                id,
              });
              setModalType("update");
              showModal("update");
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  };

  const { mutateAsync: CreateEvent } = useMutation({
    mutationFn: ({ createData }: { createData: any }) =>
      CreateEventApi(createData),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: "Event Create Successfuly",
      });
      setIsModalOpen(false);
      form.resetFields();
      setTimeout(() => {
        refetch();
      }, 1000);
    },
  });

  const { mutateAsync: DeleteEvent } = useMutation({
    mutationFn: ({ id }: { id: string }) => DeleteEventApi(id),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: "Event Delete Successfuly",
      });
      setTimeout(() => {
        refetch();
      }, 1000);
    },
  });

  const { mutateAsync: UpdateEvent } = useMutation({
    mutationFn: ({ id, updateData }: { id: string; updateData: any }) =>
      UpdateEventApi({ id, data: updateData }),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: "Event Update Successfuly",
      });
      setIsModalOpen(false);
      form.resetFields();
      setTimeout(() => {
        refetch();
      }, 1000);
    },
  });

  const onFinish = (values: any, type: string) => {
    const { title, date, id } = values;
    type === "create"
      ? CreateEvent({
          createData: {
            title,
            date,
          },
        })
      : UpdateEvent({
          id,
          updateData: {
            title,
            date,
          },
        });
  };

  const onReset = () => {
    form.resetFields();
  };

  const showModal = (type: "create" | "update") => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <FloatButton
        onClick={() => {
          setModalType("create");
          showModal("create");
        }}
        type="primary"
        rootClassName="!w-14 !h-14"
        icon={<SvgAdd />}
        tooltip={<div>Add New Event</div>}
      />
      <Modal
        title={`${modalType === "create" ? "Add New" : "Update"} Event`}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={false}
      >
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={(values) => onFinish(values, modalType)}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="id" className="hidden">
            <Input />
          </Form.Item>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <div className="flex flex-row gap-2 pt-10">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>

      <section className="bg-boxgroundA700 rounded-lg p-4 h-full">
        <div className="grid grid-cols-4 gap-4">
          {!isLoading &&
            data.data.map((item: any) => (
              <EventComponent
                id={item.id}
                deleteFn={DeleteEvent}
                key={item.id}
                {...item}
              />
            ))}
        </div>
      </section>
    </>
  );
}
