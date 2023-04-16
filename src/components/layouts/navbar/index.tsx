import { Notification, Setting } from "@/assets/icons";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section>
        <p className="text-sm text-gray-400">2022</p>
        <p className="text-sm">May 11</p>
      </section>
      <section>
        <p className="text-xl	">12:58</p>
      </section>
      <section className="flex gap-4">
        <Setting />
        <Notification />
        <div className="bg-white  rounded-full w-6 h-6 cursor-pointer"/>
      </section>
    </nav>
  );
};

export default Navbar;
