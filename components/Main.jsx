import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import NavLogo from "../public/assets/profilepic.png";
import { Avatar, Divider, Tooltip } from "antd";

const Main = () => {
  return (
    <div
      id="home"
      className="text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  mt-[100px] px-[20px]"
    >
      <div className="flex items-center justify-center">
        <Avatar
          shape="square"
          size={300}
          src={<Image src={NavLogo} alt="avatar" />}
        />
      </div>
      <div className="  mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-gray-700">
            I&#39;m <span className="text-[#1285CB]"> Bibek</span>
          </h1>
          {/* <h1 className="py-2 text-gray-700"> Full Stack Web Developer</h1> */}
          <p className="py-2 text-gray-600 sm:max-w-[70%] m-auto">
            I am a skilled and motivated <strong>Full Stack Developer</strong> with
            extensive experience in building web applications using the 
            stacks. My expertise lies in leveraging MongoDB, PostGreSQL, Express, React, Next, Loopback and
            Node.js to create dynamic and scalable web solutions that meet your demands.
            <br></br>
           <strong> Gmail </strong>: bibeksp7@gmail.com
          </p>
          <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
            <a
              href="https://github.com/Bibekspk"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/bibek-sapkota-786507211/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            {/* <Link href="/#contact">
              <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link> */}
            {/* <Link href="/resume">
              <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
