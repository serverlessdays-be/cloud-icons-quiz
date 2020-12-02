import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Main from "./Main";
import Protected from "./Protected";
import Profile from "./Profile";
import uploadNewQuestion from "./uploadNewQuestion";
import WelcomePage from "../pages/WelcomePage";

const Router = () => {
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    setRoute();
    window.addEventListener("hashchange", setRoute);
    return () => window.removeEventListener("hashchange", setRoute);
  }, []);

  function setRoute() {
    const location = window.location.href.split("/");
    const pathname = location[location.length - 1];
    setCurrent(pathname ? pathname : "home");
  }

  return (
    <HashRouter>
      <Nav current={current} />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/play" component={Main} />
        <Route exact path="/protected" component={Protected} />
        <Route exact path="/question/new" component={uploadNewQuestion} />
        <Route exact path="/admin" component={Profile} />
        <Route component={Main} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
