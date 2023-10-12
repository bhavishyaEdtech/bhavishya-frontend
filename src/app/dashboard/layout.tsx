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
      <main className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-grow h-screen overflow-y-scroll">{children}</div>
      </main>
    </>
  );
}
