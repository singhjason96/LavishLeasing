import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import { AddTestimonials } from "./components/AddTestimonials";
import { Switch } from "@material-ui/core";
import AllTestimonials from './components/AllTestimonials'

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
          <Route path='/alltestimonials'>
            <AllTestimonials />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
