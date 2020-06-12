import * as React from "react";
import { render } from "react-dom";
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RouterConfig from "./router";
//import * as styles from "./index.css";

const App = () => {
  return (
    <Router>
      <RouterConfig />
    </Router>
  )
}

render(<App/>, document.getElementById('app'))


if (module.hot) {
  module.hot.accept();
}