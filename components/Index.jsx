import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

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
  return (
    <div
      id="about"
      className="w-full container p-2  mt-[90px] px-[20px] mb-[40px] w-[95%] mx-auto"
    >
      <div className="mx-auto p-2 flex">
        <div className="mx-auto p-2 justify-center items-center">
          <h1 className="text-gray-700 text-4xl font-bold text-center">
            I&#39;m <span className="text-[#1285CB]"> Bibek</span>
          </h1>
          {Array.isArray(text) && text?.length > 0 ? (
            <p className="py-2 text-black-500 text-center text-3xl"> {text}</p>
          ) : (
            <p className="py-2 text-blue-500 text-center text-2xl">""</p>
          )}

          <p className="py-3 text-gray-600 sm:max-w-[89%] m-auto leading-7">
            I am a skilled and motivated <strong>Full Stack Developer</strong>{" "}
            with extensive experience in building web applications using
            different stacks. I have understanding of both front-end and
            back-end web development technologies, and I am comfortable working
            with a wide range of programming languages, including HTML, CSS,
            JavaScript, Typescript. I have also worked with databases such as
            MySQL, MongoDB, and PostgreSQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
