"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import Box from "./Box";
import { useMemo } from "react";
import Library from "./Library";
import { BarChart, Compass, Layout, List } from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

const guestRoutes = [
  {
    icon: HiHome,
    label: "Home",
    href: "/",
  },
  {
    icon: BiSearch,
    label: "Search",
    href: "/search",
  },
];

const artistRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
  { icon: Compass, label: "New Course", href: "/teacher/conditions" },
];

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/artist");

  const routes = isTeacherPage ? artistRoutes : guestRoutes;

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route) => (
              <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
