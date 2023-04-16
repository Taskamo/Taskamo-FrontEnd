"use client";

import { Button, Calendar, Divider } from "antd";
import { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Dayjs } from "dayjs";

export default function CalendarPage() {
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <section className="flex gap-6 h-full">
      {/* <section className="rounded-lg max-w-sm w-full bg-boxgroundA700 px-4 py-6">
        <h6 className="text-lg">Events</h6>
        <Divider className="bg-boxgroundA800 my-4" />
        <Divider className="bg-boxgroundA800 my-4 mt-auto" />
        <Button></Button>
      </section> */}
      <Calendar
        
        className="max-h-fit p-4 rounded-lg !bg-boxgroundA700"
        onPanelChange={onPanelChange}
      />
    </section>
  );
}
