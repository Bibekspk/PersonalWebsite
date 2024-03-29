import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/logo.png";

const Navbar = ({ setPage }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed top-0 w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed top-0 w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between xl:justify-around 2xl:justify-around md:justify-around lg:justify-around sm:justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Link href="/"> */}
        <a>
          <Image
            src={NavLogo}
            alt="Logo"
            width="250px"
            height="175px"
            className="cursor-pointer"
          />
        </a>
        {/* </Link> */}
        <div className="">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li
              onClick={() => {
                setPage("Home");
              }}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Home
            </li>

            <li
              onClick={() => {
                setPage("Skills");
              }}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Skills
            </li>
            <li
              onClick={() => {
                setPage("Projects");
              }}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Projects
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li> */}
            <li
              className="ml-10 text-sm uppercase hover:border-b"
              onClick={() => {
                setPage("Contact");
              }}
            >
              Contact
            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={NavLogo} width="175px" height="75px" alt="Logo" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li
                onClick={() => {
                  setPage("Home");
                  setNav(false);
                }}
                className="py-4 text-sm"
              >
                Home
              </li>
              {/* <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link> */}

              <li
                onClick={() => {
                  setNav(false);
                  setPage("Skills");
                }}
                className="py-4 text-sm"
              >
                Skills
              </li>

              <li
                onClick={() => {
                  setNav(false);
                  setPage("Projects");
                }}
                className="py-4 text-sm"
              >
                Projects
              </li>

              <li
                onClick={() => {
                  setNav(false);
                  setPage("Contact");
                }}
                className="py-4 text-sm"
              >
                Contact
              </li>

              {/* <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link> */}
              {/* <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link> */}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/bibek-sapkota-786507211/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Bibekspk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                {/* <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link> */}
                {/* <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
