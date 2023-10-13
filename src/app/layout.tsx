import "../styles/globals.css";
import type { Metadata } from "next";
import { AiOutlineLoading3Quarters as Loading } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Bhavishya",
  description: "Inspiring Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="hidden md:block h-screen bg-[#fafafa]">{children}</div>
        <div className="h-screen md:hidden w-full bg-slate-900/40 flex items-center flex-col justify-center gap-3">
          <Loading className="h-[50px] w-[50px] animate-spin text-white" />
          <p className="text-lg text-white">
            Please switch to a tablet or a desktop screen
          </p>{" "}
        </div>
      </body>
    </html>
  );
}
