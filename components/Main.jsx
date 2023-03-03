import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import NavLogo from "../public/assets/profilepic.png";
import { Avatar } from "antd";

const Main = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  let [imgWidth, setImgWidth] = useState();

  const updateDimensions = () => {
    if (innerWidth < 767) {
      setImgWidth("120px");
    } else {
      setImgWidth("185px");
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
      <div className="shadow-lg text-center sm:h-screen grid grid-cols-1 md:grid-cols-1 sm:mt-[20px] md:mt-[60px]  mt-[20px] px-[20px] w-[95%] mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src={NavLogo}
            width={imgWidth}
            height={imgWidth}
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <div className="mx-auto">
          <div>
            <p className="py-2 font-roboto text-gray-600 sm:max-w-[89%] m-auto">
              I am currently working in Supreme IT solutions as a Full Stack
              Developer. I am working in different CMS and ecommerce sites.
            </p>
            <p className="py-2 font-roboto text-gray-600 sm:max-w-[89%] m-auto">
              <strong> Gmail </strong>: bibeksp7@gmail.com
            </p>

            {/* / */}
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
              <a
                href="https://www.instagram.com/_bibekspk/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaInstagram />
                </div>
              </a>

              <a
                href="https://twitter.com/iambibeksp7"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaTwitter />
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
  );
};

export default Main;
