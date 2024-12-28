import { Fragment } from "react";
import Hero from "./elements/Hero";
import Experience from "./elements/Experience";
import Skills from "./elements/Skills";
import Projects from "./elements/Projects";
import Contact from "./elements/Contact";

const HomeModule = () => {
  return (
    <Fragment>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default HomeModule;
