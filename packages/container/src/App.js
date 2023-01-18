import React, { lazy, Suspense, useState } from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const MarketingApp = lazy(() => import("./component/MarketingApp"));
const AuthApp = lazy(() => import("./component/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return <div>
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  </div>
};
