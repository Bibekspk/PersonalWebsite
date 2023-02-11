import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import NavLogo from "../public/assets/profilepic.png";
import { Avatar } from "antd";

const Main = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  let [imgWidth, setImgWidth] = useState();

  const updateDimensions = () => {
    if (innerWidth < 767) {
      setImgWidth("300px");
    } else {
      setImgWidth("425px");
    }
  };
  useEffect(() => {
    updateDimensions();
  }, []);


  let name = [
    "A",
    " ",
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let lengthData = name.length;
      if (count < lengthData) {
        setText([...text, name[count]]);
        setCount(count + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count]);

  typeof window !== "undefined" &&
  window.addEventListener("resize", updateDimensions);

  return (
    <>
      <div
        id="home"
        className="text-center sm:h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:mt-[100px] md:mt-[40px]  mt-[100px] px-[20px]"
      >
        <div className="flex items-center justify-center mb-1">
          <Image
            src={NavLogo}
            width={imgWidth}
            height={imgWidth}
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <div className="mx-auto p-2 flex justify-center items-center">
          <div>
            <h1 className="text-gray-700">
              I&#39;m <span className="text-[#1285CB]"> Bibek</span>
            </h1>
            {Array.isArray(text) && text?.length > 0 ? (
              <h1 className="py-2 text-black-500 text-center text-3xl">
                {" "}
                {text}
              </h1>
            ) : (
              <h1 className="py-2 text-blue-500 text-center text-2xl">""</h1>
            )}

            <p className="py-2 text-gray-600 sm:max-w-[70%] m-auto">
              I am a skilled and motivated <strong>Full Stack Developer</strong>{" "}
              with extensive experience in building web applications using the
              stacks.
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
              <Link href="/#contact">
              <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
              {/* <Link href="/resume">
              <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
