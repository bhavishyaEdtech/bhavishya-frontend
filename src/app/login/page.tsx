"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [selector, setSelector] = useState(false);
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-black/10 relative">
      <div className="w-full max-w-4xl min-h-[80%]">
        <Card className="relative">
          <div className="absolute right-0 px-10 top-0 py-5 w-[400px]">
            {/* selector */}
            <div className="ml-auto flex items-center justify-start py-1 max-w-[200px] rounded-full border-[2px] border-slate-900/30 overflow-hidden relative transition-all ease-linear duration-200">
              <div
                onClick={() => setSelector(false)}
                className="flex-[0.5] flex items-center justify-center cursor-pointer rounded-full transition-all ease-linear duration-200"
              >
                <p className="text-xs text-slate-900 font-semibold tracking-wide capitalize z-10">
                  students
                </p>
              </div>
              <div
                onClick={() => setSelector(true)}
                className="flex-[0.5] flex items-center justify-center cursor-pointer rounded-full transition-all ease-linear duration-200"
              >
                <p className="text-xs text-slate-900 font-semibold tracking-wide capitalize z-10">
                  teachers
                </p>
              </div>
              <div data-select={selector} className="registerSelector" />
            </div>
          </div>

          {/* heading */}
          <div>
            <h1 className="text-slate-900 font-semibold text-5xl">Login</h1>
            <p className="text-lg font-medium text-slate-900/50 mt-3">
              {!selector ? "Login for students" : "Login for teachers"}
            </p>
          </div>

          {/* form */}
          <div className="grid grid-cols-2 gap-2 mt-5">
            {!selector && (
              <div className={`input-wrap col-span-2`}>
                <p className="text-sm font-semibold tracking-wider">
                  Mobile Number
                </p>
                <input
                  placeholder={`Enter student's gaurdian mobile number`}
                  type="text"
                  className="input"
                />
              </div>
            )}

            {selector && (
              <div className="input-wrap col-span-2">
                <p className="text-sm font-semibold tracking-wider">
                  Email address
                </p>
                <input
                  placeholder={`Enter teacher's email address`}
                  type="text"
                  className="input"
                />
              </div>
            )}

            {selector && (
              <div className="input-wrap col-span-2">
                <p className="text-sm font-semibold tracking-wider">Password</p>
                <input
                  placeholder={`Enter Password here`}
                  type="text"
                  className="input"
                />
              </div>
            )}

            {!selector && (
              <div className={`input-wrap col-span-2`}>
                <p className="text-sm font-semibold tracking-wider">OTP</p>
                <input
                  placeholder={`Enter OTP here`}
                  type="text"
                  className="input"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="mt-5 text-sm tracking-wide font-light">
              Not registered yet?
              <span>
                <a className="font-semibold text-slate-900" href="/register">
                  {" "}
                  register here.
                </a>
              </span>
            </p>

            {selector && (
              <p className="mt-5 text-sm tracking-wide font-light">
                forgot password?
                <span>
                  <a className="font-semibold text-slate-900" href="#">
                    {" "}
                    click here.
                  </a>
                </span>
              </p>
            )}
          </div>

          <div className="mt-5 flex items-center justify-end">
            {!selector ? (
              <>
                <button className="bg-slate-500 px-8 py-2 text-sm rounded-md shadow-md shadow-black/20 active:scale-[0.98] text-white hover:text-slate-200 hover:bg-slate-600 transition-all duration-200 ease-linear">
                  Generate OTP
                </button>
              </>
            ) : (
              <>
                <button className="bg-slate-500 px-8 py-2 text-sm rounded-md shadow-md shadow-black/20 active:scale-[0.98] text-white hover:text-slate-200 hover:bg-slate-600 transition-all duration-200 ease-linear">
                  Submit
                </button>
              </>
            )}
          </div>
        </Card>
      </div>
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
        className="bg-slate-500 px-8 py-2 text-sm rounded-md shadow-md shadow-black/20 active:scale-[0.98] text-white hover:text-slate-200 hover:bg-slate-600 transition-all duration-200 ease-linear absolute top-5 right-5"
      >
        Login as admin
      </button>
    </div>
  );
};

export default Login;
