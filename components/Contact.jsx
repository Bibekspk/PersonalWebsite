import { message } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = document.querySelector(".my-form");
    const formData = new FormData(form);
    axios.post("https://formspree.io/f/myyawgel", formData).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        message.success("Thank you. We will be in touch sooner");
        form.reset();
      }
    });
  };
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-duration="800"
      data-aos-delay="200"
      className="w-full lg:h-screen "
    >
      <div className="container m-auto px-2 py-16 w-full ">
        <h2 className="py-4">Connect with Me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-5 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 order-2 md:order-1">
            <div className="p-4">
              <form onSubmit={handleForm} className="my-form">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <input
                      className="border-2 rounded-lg p-2 flex "
                      type="text"
                      name="name"
                      placeholder="Name "
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="border-2 rounded-lg p-2 flex "
                      type="text"
                      name="phone"
                      placeholder="Contact Number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <input
                    className="border-2 rounded-lg p-2 flex "
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <input
                    className="border-2 rounded-lg p-2 flex "
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    className="border-2 rounded-lg p-1 "
                    rows="10"
                    name="message"
                    required
                    placeholder="Message ..."
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  className="w-full p-3 text-gray-100 mt-4"
                >
                  {loading ? "Sending ... " : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          {/* <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4 order-1 md:order-2">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Bibek Sapkota</h2>
                <p>Full Stack Web Developer</p>
                <p className="py-4">
                  I'm open to both freelance and full-time opportunities. Please
                  feel free to get in touch with me.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/bibek-sapkota-786507211/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Bibekspk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/_bibekspk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/iambibeksp7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </a>

                 
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={20}
                />
              </div>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
