import {
  MdDashboard as Dashboard,
  MdVideoLibrary as Video,
  MdSettingsSuggest as Settings,
} from "react-icons/md";
import { RiAdminFill as Admin } from "react-icons/ri";
import { FaChalkboardTeacher as Teacher } from "react-icons/fa";

export const sidebarOptions = [
  {
    id: 1,
    name: "dashboard",
    icon: <Dashboard className="h-[20px] w-[20px]" />,
    src: "/dashboard",
  },
  {
    id: 2,
    name: "upload videos",
    icon: <Video className="h-[20px] w-[20px]" />,
    src: "/dashboard/videos/upload",
  },
  {
    id: 3,
    name: "admin management",
    icon: <Admin className="h-[20px] w-[20px]" />,
    src: "/dashboard/management/admin",
  },
  {
    id: 4,
    name: "teacher management",
    icon: <Teacher className="h-[20px] w-[20px]" />,
    src: "/dashboard/management/teacher",
  },
  {
    id: 5,
    name: "settings",
    icon: <Settings className="h-[20px] w-[20px]" />,
    src: "/dashboard/settings",
  },
];
