"use client";

import { GetAllEventsApi, GetTodoApi } from "@/api/list";
import PieChartComponent from "@/components/charts/PieChart";
import { Button, Calendar, Divider, Empty, Select } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function DashboardPage() {
  const { data } = useQuery({
    queryFn: () => GetTodoApi(),
    queryKey: "todo",
  });
  const { data: eventData } = useQuery(["events"], () => GetAllEventsApi());
  const [todoList, setTodoList] = useState<any[]>([]);
  const [typeTodo, setTypeTodo] = useState("todo");
  const router = useRouter();
  useEffect(() => {
    console.log(data?.data);
    if (data?.data) {
      setTodoList(data.data);
    }
  }, [data]);

  useEffect(() => {
    console.log(todoList.length, todoList);
  }, [todoList]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-boxgroundA700 px-4  py-10 rounded-lg flex flex-row justify-evenly items-center">
        <PieChartComponent data={todoList} />
        <Divider type="vertical" className="bg-[#FFFFFF1A] !h-full" />
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#7FFFB2]" />
              <p>Work is done</p>
            </div>
            <p className="text-xs text-[#FFFFFF99]">
              Never in a milion dollers
            </p>
          </div>
          <div className="">
            <div className="flex flex-row items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#FF5454]" />
              <p>Work is unsaved</p>
            </div>
            <p className="text-xs text-[#FFFFFF99]">What’s up beb ?</p>
          </div>
        </div>
      </div>
      <div className="bg-boxgroundA700 rounded-lg flex flex-row">
        {eventData?.data?.length !== 0 ? (
          <>
            <div className="p-10 flex flex-col">
              <p className="">What’s happend in near time ?</p>
              <p className="pt-4 text-sm text-[#FFFFFF99]">
                {eventData?.data[0].title}
              </p>
              <Button
                onClick={() => {
                  router.push("/dashboard/event");
                }}
                className="mt-auto mr-auto"
              >
                All Events
              </Button>
            </div>
            <div className="pb-4 relative">
              <div className="absolute flex flex-col items-center justify-center rotate-[-34deg] top-[78px] right-[50px]">
                <h1 className="text-4xl">{eventData?.data[0].day}</h1>
                <h1>{eventData?.data[0].month}</h1>
              </div>
              <svg
                className=""
                width="149"
                height="189"
                viewBox="0 0 149 189"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.687044"
                  y="96.3056"
                  width="107"
                  height="107"
                  rx="7.5"
                  transform="rotate(-31.3188 0.687044 96.3056)"
                  fill="white"
                  fill-opacity="0.03"
                  stroke="url(#paint0_linear_1320_2751)"
                />
                <path
                  d="M9.00001 59.5V59.5C15.2165 55.9477 18.3285 48.7076 16.6284 41.7525L14.5629 33.3027C14.189 31.7729 13.6356 30.2926 12.9144 28.8926L10.0631 23.3578C7.18949 17.7796 7.10043 11.176 9.8226 5.52234L12 1"
                  stroke="white"
                  stroke-opacity="0.8"
                />
                <line
                  x1="75.5"
                  y1="51"
                  x2="75.5"
                  y2="1"
                  stroke="white"
                  stroke-opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1320_2751"
                    x1="61.1558"
                    y1="146.649"
                    x2="6.88637"
                    y2="200.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </>
        ) : (
          <Empty description="" className="m-auto w-full" />
        )}
      </div>
      <div className="bg-boxgroundA700 p-4 rounded-lg h-fit">
        <div className="flex flex-row justify-between items-center">
          <h1>TODO</h1>
          <Select
            defaultValue={typeTodo}
            style={{ width: 120 }}
            onChange={(value: string) => {
              setTypeTodo(value);
            }}
            options={[
              { value: "todo", label: "todo" },
              { value: "doing", label: "doing" },
              { value: "done", label: "done" },
            ]}
          />
        </div>
        <Divider className="bg-[#FFFFFF1A]" />
        <div className="mt-4 flex flex-col gap-2">
          {todoList
            .filter((item: any) => item.status === typeTodo)
            .map((item: any) => (
              <div className="bg-boxgroundA100 p-4 rounded-lg flex flex-col gap-2">
                <h1>{item.title}</h1>
                <p className="text-xs text-[#FFFFFF99]">{item.description}</p>
              </div>
            ))}
          {todoList.filter((item: any) => item.status === typeTodo).length ===
            0 && (
            <Empty description={false} image={Empty.PRESENTED_IMAGE_DEFAULT} />
          )}
          <Button
            onClick={() => {
              router.push("/dashboard/todos");
            }}
            className="mx-auto mt-4"
          >
            All Todo's
          </Button>
        </div>
      </div>
      <div className="bg-boxgroundA700 p-4 rounded-lg">
        <Calendar
          fullscreen={false}
          className="p-4 rounded-lg !bg-transparent"
        />
      </div>
    </div>
  );
}
