import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import {AddTestimonials} from './components/AddTestimonials';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
      <Route path="/testimonial" component={AddTestimonials} />
    </BrowserRouter>
  );
}

export default App;
