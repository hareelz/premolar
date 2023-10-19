import React from "react";
import Navbar from "./components/Navbar";
import Info from "./components/info/Info";
import Skils from "./components/skils/Skils";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Info />
      <Experience />
      <Skils />
    </div>
  );
};

export default App;
