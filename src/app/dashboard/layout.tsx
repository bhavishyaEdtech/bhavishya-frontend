"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="flex-grow h-screen overflow-y-scroll">{children}</div>
      </main>
    </>
  );
}
