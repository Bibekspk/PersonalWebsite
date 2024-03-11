import Head from "next/head";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import IndexPage from "../components/Index";
import Logo from "../public/assets/logo.png";

export default function Home() {
  const [page, setPage] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden grid grid-cols-1 xl:grid-cols-3">
      <Head>
        <title>
          Crafting the Future of Web: Bibek Sapkota, Full Stack Developer
        </title>
        <meta
          name="description"
          content="I’m a Full Stack Web developer specializing in building exceptional digital experiences."
        />
        <meta
          name="keywords"
          content="fullstack developer, web development, digital experiences,Nepal,Kathmandu,Bibek,Sapkota,sapkota,bibek,Bibek Sapkota,developer,React,node"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
        <meta name="content-language" content="en"></meta>
        <meta
          property="og:title"
          content="Crafting the Future of Web: Bibek Sapkota, Full Stack Developer"
        />
        <meta
          property="og:description"
          content="I’m a Full Stack Web developer specializing in building exceptional digital experiences."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iambibeksp7" />
        <meta property="og:instagram" content="@_bibekspk" />
        <link rel="canonical" href="https://sapkotabibek.com.np/" />
        <link rel="icon" href="/logo.png" />
        <meta name="robots" content="index, follow" />
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
