import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <ParallaxProvider>
      <HomePage />
    </ParallaxProvider>
  );
}

export default App;
