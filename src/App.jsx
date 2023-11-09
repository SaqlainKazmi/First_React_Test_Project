import { useState } from "react";
import Sidenav from "./Components/Sidenav";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Contact />
    </>
  );
}

export default App;
