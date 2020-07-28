import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import { AddTestimonials } from "./components/AddTestimonials";
import ContactPage from './components/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Route path="/add">
            <AddTestimonials />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
