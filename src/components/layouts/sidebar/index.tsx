"use client";

import Image from "next/image";
import TaskamoLogo from "@/assets/image/taskamo-logo.png";
import { Divider } from "antd";
import {
  Calendar,
  CalendarNumber,
  Home,
  Logout,
  RowVertical,
  TaskSquare,
} from "@/assets/icons";
import Link from "next/link";
import "./style.scss";
import { usePathname } from "next/navigation";

const SidebarItems = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    label: "Timeline",
    icon: RowVertical,
    path: "/dashboard/timeline",
  },
  {
    label: "Event",
    icon: CalendarNumber,
    path: "/dashboard/events",
  },
  {
    label: "Todo",
    icon: TaskSquare,
    path: "/dashboard/todos",
  },
  {
    label: "Calendar",
    icon: Calendar,
    path: "/dashboard/calendar",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex flex-col items-center h-full">
        <Image width={150} alt="taskamo" src={TaskamoLogo} />
        <Divider className="bg-boxgroundA800" />
        <div className="w-full h-full flex flex-col">
          {SidebarItems.map((item) => (
            <Link href={item.path}>
              <section
                className={`sidebar__items ${
                  pathname === item.path && "sidebar__items--active"
                }`}
              >
                <item.icon />
                {item.label}
              </section>
            </Link>
          ))}
          <section className="sidebar__items sidebar__items--logout">
            <Logout />
            Logout
          </section>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
