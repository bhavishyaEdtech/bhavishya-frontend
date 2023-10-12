"use client";

import { sidebarOptions } from "@/utils/SidebarRoutes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiLogOutCircle as Logout } from "react-icons/bi";
import Link from "next/link";

type SidebarProps = {};

export default function Sidebar({}: SidebarProps) {
  const currentRoute = usePathname();

  const [collapse, setCollapsed] = useState(false);

  const collapsible = (e: any) => {
    e.preventDefault();
    setCollapsed(!collapse);
  };

  return (
    <div className={`relative hidden md:block z-30`}>
      <button
        onClick={collapsible}
        className={`rounded-full bg-slate-900 bg-primary_100 xl:p-[10px] p-2 focus:outline-none ${
          !collapse ? "rotate-180" : "rotate-0"
        } hidden md:flex items-center justify-center absolute right-[-15px] top-[27%] `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`xl:w-6 xl:h-6 w-4 h-4`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
            fill="#ffffff"
          />
        </svg>
      </button>

      <aside data-collapse={collapse} className="sidebar">
        <div
          className={`flex flex-col justify-start items-start ${
            collapse && "items-center"
          } w-full px-10`}
        >
          <h1 className={`text-white text-xl font-semibold uppercase `}>
            {!collapse ? "Bhavishya Edtech" : "BE"}
          </h1>
          <p
            className={`text-white/70 text-[14px] font-normal ${
              collapse && "text-center mt-2"
            }`}
          >
            Admin Dashboard
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col justify-between items-center w-full px-5 flex-grow ${
            collapse && "items-center"
          }`}
        >
          <div className="w-full flex flex-col justify-start items-start gap-3">
            {sidebarOptions.map((data) => (
              <>
                <Link href={data.src} className="w-full">
                  <div
                    className={`group flex items-center justify-start py-4 px-5 w-full rounded-md gap-3 text-slate-300 shadow-black/20 cursor-pointer transition-all duration-300 ease-linear ${
                      currentRoute === data.src &&
                      "!text-white bg-white/10 shadow-md"
                    } hover:text-white hover:bg-white/10 hover:shadow-md`}
                    key={data.id}
                  >
                    <p>{data.icon}</p>
                    <p className={`text-sm ${collapse && "hidden"}`}>
                      {data.name}
                    </p>
                  </div>
                </Link>
              </>
            ))}
          </div>

          <div
            className={`group flex items-center justify-start py-4 px-5 w-full rounded-md gap-3 text-slate-300 shadow-black/20 cursor-pointer transition-all duration-300 ease-linear hover:text-white hover:bg-white/10 hover:shadow-md `}
          >
            <p>
              <Logout className="h-[20px] w-[20px]" />
            </p>
            <p className={`text-sm ${collapse && "hidden"}`}>Log out</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
