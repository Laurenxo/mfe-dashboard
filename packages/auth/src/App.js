import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router, Route } from "react-router-dom";

import SignUp from "../components/Signup";
import SignIn from '../components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

export default ({ history, onSignIn }) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Route path="/auth/signin">
          <SignIn onSignIn={onSignIn} />
        </Route>
        <Route path="/auth/signup">
          <SignUp onSignIn={onSignIn} />
        </Route>
      </Router>
    </StylesProvider>
  </div>
};