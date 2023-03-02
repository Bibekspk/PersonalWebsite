import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import NextJS from "../public/assets/skills/nextjs.png";
import NodeJs from "../public/assets/skills/node.png";
import Loopback from "../public/assets/skills/loopback.png";
import Postgres from "../public/assets/skills/Postgresql.png";
import Mongo from "../public/assets/skills/mongo.png";
import MySQL from "../public/assets/skills/mysql.png";
import Typescript from "../public/assets/skills/typescript.png";

import AWS from "../public/assets/skills/aws.png";

const Skills = () => {
  return (
    <div
      id="skills"
      data-aos="fade-left"
      data-aos-once="false"
      data-aos-duration="800"
      data-aos-delay="200"
      className="w-full container p-2 mx-auto mt-[100px] px-[20px]"
    >
      <div className="mx-auto flex flex-col justify-center">
        {/* <h2 className="py-2 mt-3">Skills</h2> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="p-6 shadow-xl rounded-xl hover:scale-105  ease-in duration-300 hover:cursor-pointer"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
              <div className="m-auto hover:rotate-[360deg]">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
              <div className="m-auto">
                <Image src={NodeJs} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>Loopback</h3>
              </div>
              <div className="m-auto">
                <Image src={Loopback} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
              <div className="m-auto">
                <Image src={Typescript} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
              <div className="m-auto">
                <Image src={Mongo} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>PostGres</h3>
              </div>
              <div className="m-auto">
                <Image src={Postgres} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
              <div className="m-auto">
                <Image src={MySQL} width="64px" height="64px" alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
