import React from "react";
import MenuLink from "./MenuLink";
import { Home, Calculator } from "lucide-react"; // Import the required icons

interface MenuItem {
  title: string;
  route: string;
  icon: React.ReactNode; // Add icon property
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon: <Home size={20} />, // Add the icon
  },
  {
    title: "Calculator",
    route: "/dashboard/calculator",
    icon: <Calculator size={20} />, // Add the icon
  },
];

const Sidebar = () => {
  return (
    <div className="h-full relative">
      <div className="flex flex-col ">
        <div className="absolute top-0 -translate-y-10 translate-x-12">
          <img src="/icons/logo.png" alt="" className="w-auto h-48" />
        </div>
        <div className="flex flex-col gap-2 mt-36">
          {menuItems.map((item) => (
            <button
              key={item.title}
              className="flex items-center space-x-2 hover:bg-zinc-800 cursor-pointer text-sm font-semibold rounded-lg text-white"
            >
              <MenuLink item={item} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
