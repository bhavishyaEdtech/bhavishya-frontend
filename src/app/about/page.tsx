"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="container text-gray-600 body-font flex pt-8">
        <div className="flex-1">
          <h1 className="title-font sm:text-4xl text-3xl mt-10 mb-8 font-medium text-gray-900">
            About Bhavishya
          </h1>

          <p className="mb-5 mt-8 leading-relaxed max-w-xl">
            Introducing the Future of Early Childhood Education: Empowering
            Anganwadi Teachers with Innovative EdTech Application Greetings,
            esteemed educators, administrators, and stakeholders. Today, we
            unveil a groundbreaking leap towards transforming early childhood
            education – an innovation poised to revolutionize the way we nurture
            the youngest minds of our society.
          </p>

          <p className="mb-5 leading-relaxed max-w-xl">
            It is with immense pride and excitement that we introduce an EdTech
            application tailored specifically for Anganwadi teachers, a vital
            cornerstone of our educational system, dedicated to shaping the
            learning journey of children aged 0 to 6.
          </p>
          <p className="mb-5 leading-relaxed max-w-xl">
            This innovative application stands as a testament to the power of
            technology in the service of education, a dynamic tool that empowers
            our Anganwadi teachers to engage, enlighten, and inspire the little
            learners who represent the future of our nation. Designed to operate
            seamlessly on teachers' systems and projected onto classroom
            screens, this application orchestrates an immersive learning
            experience, harnessing the potential of poems, stories, mathematics,
            and a diverse array of subjects, all carefully curated to stimulate
            young minds.
          </p>
        </div>

        <div className="relative flex-1">
          <Image src={"/images/about.jpg"} alt="img" fill />
        </div>
      </div>
    </>
  );
};

export default About;
