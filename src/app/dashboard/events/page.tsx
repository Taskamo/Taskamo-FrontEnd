"use client";

import { GetAllEventsApi } from "@/api/list";
import { Button } from "antd";
import { useQuery } from "react-query";

const EventComponent = ({
  date_ago,
  day,
  month,
  title,
}: {
  date_ago: string;
  day: string;
  month: string;
  title: string;
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
        <Button type="ghost" color="red">
          Delete
        </Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const { data, isLoading } = useQuery(["events"], () => GetAllEventsApi());

  return (
    <section className="bg-boxgroundA700 rounded-lg p-4 h-full">
      <div className="grid grid-cols-4 gap-4">
        {!isLoading &&
          data.data.map((item: any) => (
            <EventComponent key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
}
