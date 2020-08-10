import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import { AddTestimonials } from "./components/AddTestimonials";
import ContactPage from "./components/ContactPage";
import AllTestimonials from "./components/AllTestimonials";
import MyPDF from './components/test.pdf';
import TeamPage from './components/TeamPage';

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
          <Route path="/alltestimonials">
            <AllTestimonials />
          </Route>

          <Route path='/team'>
            <TeamPage />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
