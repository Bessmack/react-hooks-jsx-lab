import React, { StrictMode } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <StrictMode>
        <NavBar />
      </StrictMode>
      <StrictMode>
        <Home />
      </StrictMode>
      <StrictMode>
        <About />
      </StrictMode>
    </div>
  );
}

export default App;
