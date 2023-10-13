"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack as BackArrow } from "react-icons/bi";

type Props = {
  params: { id: string };
};

const page = (props: Props) => {
  const { params } = props;
  const router = useRouter();
  const currentRoute = usePathname();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <>
      <div className="container h-screen flex flex-col pb-5">
        <div className="py-5 flex items-center justify-between w-full">
          <button
            onClick={() => {
              router.push(`/videos`);
            }}
            className="bg-slate-900/30 rounded-lg p-2 active:scale-[0.98] hover:bg-black/30
                transition-all ease-linear duration-200 flex items-center justify-center gap-1"
          >
            <BackArrow className="h-[20px] w-[20px] text-white" />
            <span className="uppercase text-white tracking-wider text-xs">
              back
            </span>
          </button>

          <p className="text-slate-900/70 text-xl font-semibold tracking-widest">
            {currentRoute}
          </p>
        </div>
        <div className="flex-grow flex">
          {/* video player */}
          <div key={params.id} className="flex-grow">
            <div className="h-[70%] mx-2 bg-yellow-200 rounded-md flex items-center justify-center">
              video {params.id}
            </div>
            <div className="mt-3">
              <p className="text-xl font-semibold ">Title {params.id}</p>
              <p className="text-base font-normal tracking-wider leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur alias tempore sed in architecto dignissimos minus
                quasi voluptatem quos! Incidunt quis sit voluptas numquam. Saepe
                laudantium dignissimos dolores nobis quae.
              </p>
            </div>
          </div>

          <div className="w-[700px] h-[70vh] overflow-y-scroll">
            {/* list of all other videos */}

            {arr.map((data) => (
              <>
                <div
                  key={data}
                  onClick={() => {
                    router.push(`/videos/${data}`);
                  }}
                  className="flex items-center w-full gap-3 cursor-pointer px-2 rounded-md transition-all ease-linear duration-200 hover:bg-slate-300 justify-between mb-2 group"
                >
                  <div className="relative h-[50px] w-[100px] bg-black/20 rounded-md overflow-hidden group-hover:opacity-90">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="image"
                      fill
                      className="object-center object-cover"
                    ></Image>
                  </div>

                  <div className="text-slate-900 group-hover:text-black/80">
                    <p className="text-base font-semibold ">Title {data}</p>
                    <p className="text-xs font-light tracking-wide leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
