"use client";
import Card from "@/components/Card";
import React, { useState } from "react";

type Props = {};

const Register = (props: Props) => {
  const [selector, setSelector] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-black/10">
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
            <h1 className="text-slate-900 font-semibold text-5xl">
              Registration
            </h1>
            <p className="text-lg font-medium text-slate-900/50 mt-3">
              {!selector
                ? "Registration for students"
                : " Registration for teachers"}
            </p>
          </div>

          {/* form */}
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="input-wrap">
              <p className="text-sm font-semibold tracking-wider">Full Name</p>
              <input
                placeholder={`Enter ${
                  !selector ? "student's" : "teacher's"
                } name`}
                type="text"
                className="input"
              />
            </div>

            {!selector && (
              <div className="input-wrap">
                <p className="text-sm font-semibold tracking-wider">
                  Gaurdian's Name
                </p>
                <input
                  placeholder={`Enter name of gaurdian ( father/ mother/ relative )`}
                  type="text"
                  className="input"
                />
              </div>
            )}

            <div
              className={`input-wrap ${
                !selector && "col-span-2"
              }`}
            >
              <p className="text-sm font-semibold tracking-wider">
                Mobile Number
              </p>
              <input
                placeholder={`Enter ${
                  !selector ? "student's gaurdian" : "teacher's"
                } mobile number`}
                type="text"
                className="input"
              />
            </div>

            {selector && (
              <>
                <div className="input-wrap ">
                  <p className="text-sm font-semibold tracking-wider">
                    Email address
                  </p>
                  <input
                    placeholder={`Enter teacher's email address`}
                    type="text"
                    className="input"
                  />
                </div>
                <div className="input-wrap">
                  <p className="text-sm font-semibold tracking-wider">
                    Enter Password
                  </p>
                  <input
                    placeholder={`Enter Login password`}
                    type="text"
                    className="input"
                  />
                </div>
              </>
            )}

            <div className="input-wrap">
              <p className="text-sm font-semibold tracking-wider">
                Select City
              </p>
              <input
                placeholder={`Select City`}
                type="text"
                className="input"
              />
            </div>

            <div className="input-wrap">
              <p className="text-sm font-semibold tracking-wider">
                Select State
              </p>
              <input
                placeholder={`Select state`}
                type="text"
                className="input"
              />
            </div>

            <div
              className={`input-wrap col-span-2`}
            >
              <p className="text-sm font-semibold tracking-wider">Code</p>
              <input
                placeholder={`Enter centre code`}
                type="text"
                className="input"
              />
            </div>
          </div>

          <p className="mt-5 text-sm tracking-wide font-light">
            Already registered?
            <span>
              <a className="font-semibold text-slate-900" href="/login">
                {" "}
                login here.
              </a>
            </span>
          </p>

          <div className="mt-5 flex items-center justify-end">
            <button className="bg-slate-500 px-8 py-2 text-sm rounded-md shadow-md shadow-black/20 active:scale-[0.98] text-white hover:text-slate-200 hover:bg-slate-600 transition-all duration-200 ease-linear">
              Submit
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
