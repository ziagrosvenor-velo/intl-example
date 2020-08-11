import React from "react";
import { IntlProvider } from "react-intl";
import "./styles.css";

import { RootLevelComponent } from "./components";

export default function App() {
  return (
    <div className="App">
      <IntlProvider messages={null} defaultLocale="en">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <RootLevelComponent />
      </IntlProvider>
    </div>
  );
}
