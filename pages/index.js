import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
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
      {/* <Contact /> */}
    </div>
  );
}
