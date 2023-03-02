import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/Index";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import IndexPage from "../components/Index";

export default function Home() {
  const [page, setPage] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden grid grid-cols-1 xl:grid-cols-3">
      <Head>
        <title>Bibek | Full Stack Developer</title>
        <meta
          name="description"
          content="I’m a Full Stack Web developer specializing in building exceptional digital experiences."
        />
      </Head>
      <Navbar setPage={setPage}></Navbar>
      <div className=" xl:order-1 md:order-2  order-2 xl:col-span-1 ">
        <Main />
      </div>
      <div className="xl:col-span-2 xl:order-2 md:order-1   order-1 px-1 scroll-x">
        {page === "Skills" && <Skills />}
        {(page === "Home" || page === "") && <IndexPage />}
        {page === "Projects" && <Projects />}
        {page === "Contact" && <Contact />}
      </div>
    </div>
  );
}
