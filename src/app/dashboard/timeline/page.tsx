"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { useMutation, useQuery } from "react-query";
import { GetTimeLineApi, PostTimeLineApi } from "@/api/list";
import { useEffect, useState } from "react";
import SvgAdd from "@/assets/icons/Add";
import {
  FloatButton,
  Modal,
  Form,
  Input,
  DatePicker,
  Button,
  message,
  TimePicker,
} from "antd";

interface Event {
  title: string;
  start: Date;
  end: Date;
  desc: string;
}

// moment.tz.setDefault("Asia/Tehran");
const localizer = momentLocalizer(moment);

export default function TimelinePage() {
  const date = moment().format("Y-M-D");
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const timeline = useQuery({
    queryFn: () => GetTimeLineApi(date),
    queryKey: "timeline",
  });
  const { mutateAsync: CreateTimeline } = useMutation({
    mutationFn: ({ createData }: { createData: any }) =>
      PostTimeLineApi(createData),
    onSuccess(data, variables, context) {
      messageApi.open({
        type: "success",
        content: "Timeline Create Successfuly",
      });
      setIsModalOpen(false);
      form.resetFields();
      setTimeout(() => {
        timeline.refetch();
      }, 1000);
    },
  });

  useEffect(() => {
    console.log(timeline.data);
    setEvents(
      timeline?.data?.data?.map((item: any) => ({
        title: item.title,
        desc: item.description,
        start: new Date(
          new Date(item.start_at).getUTCFullYear(),
          new Date(item.start_at).getUTCMonth(),
          new Date(item.start_at).getUTCDate(),
          new Date(item.start_at).getUTCHours(),
          new Date(item.start_at).getUTCMinutes(),
          new Date(item.start_at).getUTCSeconds(),
          new Date(item.start_at).getUTCMilliseconds()
        ),
        end: new Date(
          new Date(item.end_at).getUTCFullYear(),
          new Date(item.end_at).getUTCMonth(),
          new Date(item.end_at).getUTCDate(),
          new Date(item.end_at).getUTCHours(),
          new Date(item.end_at).getUTCMinutes(),
          new Date(item.end_at).getUTCSeconds(),
          new Date(item.end_at).getUTCMilliseconds()
        ),
      }))
    );
  }, [timeline.data]);

  const onFinish = (values: any) => {
    const {
      title,
      description,
      date_start_at,
      time_start_at,
      date_end_at,
      time_end_at,
    } = values;

    const start_at = moment(date_start_at)
      .set({
        hour: time_start_at.hour(),
        minute: time_start_at.minute(),
        second: time_start_at.second(),
      })
      .format("YYYY-MM-DD HH:mm:ss");

    const end_at = moment(date_end_at)
      .set({
        hour: time_end_at.hour(),
        minute: time_end_at.minute(),
        second: time_end_at.second(),
      })
      .format("YYYY-MM-DD HH:mm:ss");

    CreateTimeline({
      createData: {
        title,
        description,
        start_at,
        end_at,
      },
    });
  };

  return (
    <>
      {contextHolder}
      <FloatButton
        onClick={() => {
          setIsModalOpen(true);
        }}
        type="primary"
        rootClassName="!w-14 !h-14"
        icon={<SvgAdd />}
        tooltip={<div>Add New Timeline</div>}
      />
      <Modal
        title={`Create Timeline`}
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={false}
      >
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={(values) => onFinish(values)}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="id" className="hidden">
            <Input />
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
          <div className="flex flex-row gap-2">
            <Form.Item
              name="date_start_at"
              label="Date start at"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="time_start_at"
              label="Time start at"
              rules={[{ required: true }]}
            >
              <TimePicker />
            </Form.Item>
          </div>
          <div className="flex flex-row gap-2">
            <Form.Item
              name="date_end_at"
              label="Date end at"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="time_end_at"
              label="Time end at"
              rules={[{ required: true }]}
            >
              <TimePicker />
            </Form.Item>
          </div>
          <Form.Item>
            <div className="flex flex-row gap-2 pt-10">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={() => form.resetFields()}>
                Reset
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>

      <div className="">
        <Calendar
          events={events}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 150px)" }}
          view="day"
        />
      </div>
    </>
  );
}
