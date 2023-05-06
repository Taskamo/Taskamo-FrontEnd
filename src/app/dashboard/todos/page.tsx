"use client";
import {
  CreateTodoApi,
  DeleteTodoApi,
  GetTodoApi,
  UpdateTodoApi,
} from "@/api/list";
import SvgAdd from "@/assets/icons/Add";
import {
  Button,
  Divider,
  FloatButton,
  Form,
  Input,
  message,
  Modal,
} from "antd";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function TodoPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const { data, refetch } = useQuery({
    queryFn: () => GetTodoApi(),
  });
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"create" | "update">("create");

  const { mutateAsync: UpdateTodo } = useMutation({
    mutationFn: ({ id, updateData }: { id: string; updateData: any }) =>
      UpdateTodoApi({ id, data: updateData }),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: "Task Update Successfuly",
      });
      setIsModalOpen(false);
      form.resetFields();
      setTimeout(() => {
        refetch();
      }, 1000);
    },
  });

  const { mutateAsync: DeleteTodo } = useMutation({
    mutationFn: (id: string) => DeleteTodoApi(id),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: data.data,
      });
      setTimeout(() => {
        refetch();
      }, 1000);
    },
  });

  const { mutateAsync: CreateTodo } = useMutation({
    mutationFn: (formData: any) => CreateTodoApi(formData),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: "Task Create Successfuly",
      });
      setIsModalOpen(false);
      form.resetFields();
      setTimeout(() => {
        refetch();
      }, 1000);
    },
  });

  const onFinish = (values: any, type: string) => {
    const { title, description, id, status = "todo" } = values;
    type === "create"
      ? CreateTodo({ title, description, status })
      : UpdateTodo({ id, updateData: { title, description, status } });
  };

  const onReset = () => {
    form.resetFields();
  };

  const showModal = (type: "create" | "update") => {
    type === "create" ? setModalType("create") : setModalType("update");
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const TodoItem = ({
    id,
    title,
    description,
    type,
    deleteFn,
    updateFn,
  }: {
    id: string;
    title: string;
    description: string;
    type: string;
    deleteFn: (id: string) => void;
    updateFn: (data: { id: string; updateData: any }) => void;
  }) => {
    return (
      <div className="bg-boxgroundA100 py-2 px-4 rounded-lg gap-2 flex flex-col">
        <h5 className="text-xl font-bold">{title}</h5>
        <p>{description}</p>
        <div className="flex flex-row gap-2 pt-4">
          {type !== "todo" && (
            <Button
              type="default"
              onClick={() =>
                updateFn({
                  id: id,
                  updateData: {
                    status: type === "doing" ? "todo" : "doing",
                    title,
                    description,
                  },
                })
              }
            >
              Previous
            </Button>
          )}
          {type !== "done" && (
            <Button
              type="default"
              onClick={() =>
                updateFn({
                  id,
                  updateData: {
                    status: type === "todo" ? "doing" : "done",
                    title,
                    description,
                  },
                })
              }
            >
              Next
            </Button>
          )}
          <Button
            onClick={() => deleteFn(id)}
            type="link"
            danger
            className="ml-auto"
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              form.setFieldsValue({
                title,
                description,
                id,
                status: type,
              });
              showModal("update");
            }}
            type="ghost"
          >
            Edit
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      {contextHolder}
      <FloatButton
        onClick={() => showModal("create")}
        type="primary"
        rootClassName="!w-14 !h-14"
        icon={<SvgAdd />}
        tooltip={<div>Add New Task</div>}
      />
      <Modal
        title={`${modalType === "create" ? "Add New" : "Update"} Task`}
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
          <Form.Item name="status" className="hidden">
            <Input defaultValue="todo" />
          </Form.Item>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input />
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
      <section className="grid grid-cols-3 gap-4 bg-boxgroundA700 rounded-lg p-4 h-full">
        <div className="p-3 h-full bg-boxgroundA100 rounded-lg">
          <h6>To-Do</h6>
          <Divider className="bg-white" />
          <div className="flex flex-col gap-2">
            {data?.data
              ?.filter((item: any) => item.status === "todo")
              ?.map((item: any) => (
                <TodoItem
                  updateFn={UpdateTodo}
                  id={item.id}
                  deleteFn={DeleteTodo}
                  type="todo"
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
        <div className="p-3 h-full bg-boxgroundA100 rounded-lg">
          <h6>Doing</h6>
          <Divider className="bg-white" />
          <div className="flex flex-col gap-2">
            {data?.data
              ?.filter((item: any) => item.status === "doing")
              ?.map((item: any) => (
                <TodoItem
                  updateFn={UpdateTodo}
                  id={item.id}
                  deleteFn={DeleteTodo}
                  type="doing"
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
        <div className="p-3 h-full bg-boxgroundA100 rounded-lg">
          <h6>Done</h6>
          <Divider className="bg-white" />
          <div className="flex flex-col gap-2">
            {data?.data
              ?.filter((item: any) => item.status === "done")
              ?.map((item: any) => (
                <TodoItem
                  updateFn={UpdateTodo}
                  id={item.id}
                  deleteFn={DeleteTodo}
                  type="done"
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
