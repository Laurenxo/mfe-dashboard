import React from "react";
import { StylesProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default () => {
  return <div>
    <StylesProvider>
      <BrowserRouter>
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/" component={Landing} />
      </BrowserRouter>
    </StylesProvider>
  </div>
};