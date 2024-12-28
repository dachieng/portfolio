import { Fragment } from "react";
import Hero from "./elements/Hero";
import Experience from "./elements/Experience";
import Skills from "./elements/Skills";

const HomeModule = () => {
  return (
    <Fragment>
      <Hero />
      <Experience />
      <Skills />
    </Fragment>
  );
};

export default HomeModule;
