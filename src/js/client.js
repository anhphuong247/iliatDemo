import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import LayoutHome from "./pages/LayoutHome";
import LayoutGmat from "./pages/LayoutGmat";
import LayoutIelts from "./pages/LayoutIelts";
const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LayoutHome}></Route>
      <Route path="layoutgmat" name="layoutgmat" component={LayoutGmat}></Route>
      <Route path="layoutielts" name="layoutielts" component={LayoutIelts}></Route>
  </Router>,
app);
