import { HiOutlineViewGrid, HiOutlineCube, HiOutlineCog } from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
