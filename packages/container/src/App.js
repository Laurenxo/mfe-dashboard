import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {

  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <MarketingApp />
    </StylesProvider>
  </div>
};
