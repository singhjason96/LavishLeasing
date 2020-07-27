import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import { AddTestimonials } from "./components/AddTestimonials";
import { Switch } from "@material-ui/core";

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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
