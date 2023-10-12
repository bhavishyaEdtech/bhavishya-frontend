"use client";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {};

const Hero = (props: Props) => {
  const router = useRouter();

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Education is not the filling of a pail,
            <br className="hidden lg:inline-block" />
            but the lighting of a fire.
          </h1>
          <p className="mb-8 leading-relaxed">
            Effective educators are those who inspire their students, awakening
            their intellectual and creative capacities. They go beyond the
            transfer of facts and figures; they kindle a sense of wonder and a
            desire to explore the world.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                router.push("/videos");
              }}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Checkout lectures
            </button>
            <button
              onClick={() => {
                router.push("/about");
              }}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              more info
            </button>
          </div>
        </div>
        <div className="max-w-lg w-full">
          <img
            className="w-[85%] h-full object-cover object-center rounded"
            alt="hero"
            src="/images/hero.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
