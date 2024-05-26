"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  route: string;
  icon: React.ReactNode; // Add icon property
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={item.route} className="w-full flex justify-start text-start">
      <div
        className={`flex items-center px-4 py-3  ${
          pathname === item.route ? "bg-primary w-full text-white bg-zinc-800 rounded-lg" : ""
        }`}
      >
        {item.icon} {/* Render the icon */}
        <p className="ml-2">{item.title}</p>
      </div>
    </Link>
  );
};

export default MenuLink;
