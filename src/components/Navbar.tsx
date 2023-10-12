"use client";
import { navOptions } from "@/utils/NavRoutes";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const currentRoute = usePathname();
  const router = useRouter();

  return (
    <div className="text-white/60 bg-slate-900">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center uppercase text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Bhavishya</span>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {navOptions.map((data) => (
            <a
              key={data.id}
              href={data.href}
              className={`mr-5 hover:text-white cursor-pointer transition-all duration-200 ease-linear ${
                currentRoute === data.href && "text-white"
              }`}
            >
              {data.name}
            </a>
          ))}
        </nav>

        <div>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="inline-flex items-center border-slate-200 border-[2px] py-1 px-3 outline-none hover:scale-[0.98] active:scale-[0.99] text-white group transition-all ease-linear duration-200 rounded text-base mt-4 md:mt-0"
          >
            <span>Login here</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1 group-hover:ml-[0.20rem]"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
