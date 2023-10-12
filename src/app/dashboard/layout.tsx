"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { AiOutlineLoading3Quarters as Loading } from "react-icons/ai";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="hidden md:flex ">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-grow h-screen overflow-y-scroll">{children}</div>
      </main>

      <main className="md:hidden">
        <div className="h-screen w-full bg-slate-900/40 flex items-center flex-col justify-center gap-3">
          <Loading className="h-[50px] w-[50px] animate-spin text-white" />
          <p className="text-lg text-white">
            Please switch to a tablet or a desktop screen
          </p>{" "}
        </div>
      </main>
    </>
  );
}
