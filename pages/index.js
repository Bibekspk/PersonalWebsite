import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Head>
        <title>Bibek | Full Stack Developer</title>
        <meta
          name="description"
          content="I’m a Full Stack Web developer specializing in building exceptional digital experiences."
        />
        {/* <link rel="icon" href="/logo.png" /> */}
      </Head>
      <Main />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
