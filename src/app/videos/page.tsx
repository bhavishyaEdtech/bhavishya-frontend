"use client";

import Card from "@/components/Card";
import GridContainer from "@/components/GridContainer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { BsFillPlayFill as PlayButton } from "react-icons/bs";

type Props = {};

const VideosPage = (props: Props) => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Navbar />
      <div className="container text-gray-600 body-font pt-8">
        <div className="">
          <h1 className="title-font sm:text-4xl text-3xl mt-10 mb-8 font-medium text-gray-900">
            Video Lectures
          </h1>

          <GridContainer>
            {arr.map((data) => (
              <Card key={data} className="p-2">
                <div className="relative w-full min-h-[200px] bg-black/20 rounded-md overflow-hidden">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt="image"
                    fill
                    className="object-center object-cover"
                  ></Image>
                </div>

                <div className="mt-3 px-3">
                  <p className="text-lg font-semibold ">Title {data}</p>
                  <p className="text-sm font-light tracking-wider leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur alias tempore sed in architecto dignissimos
                    minus quasi voluptatem quos! Incidunt quis sit voluptas
                    numquam. Saepe laudantium dignissimos dolores nobis quae.
                  </p>
                </div>

                <div className="my-3 px-3 w-full flex items-center justify-end">
                  <button
                    className="bg-slate-900/30 rounded-lg p-2 active:scale-[0.98] hover:bg-black/30
                transition-all ease-linear duration-200 flex items-center justify-center gap-1"
                  >
                    <PlayButton className="h-[20px] w-[20px] text-white" />
                    <span className="uppercase text-white tracking-wider text-xs">
                      play
                    </span>
                  </button>
                </div>
              </Card>
            ))}
          </GridContainer>
        </div>
      </div>
    </>
  );
};

export default VideosPage;
