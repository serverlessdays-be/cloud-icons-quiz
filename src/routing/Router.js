import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/Nav";
import Protected from "../components/Protected";
import Profile from "../components/Profile";
import UploadNewQuestion from "../components/UploadNewQuestion";
import WelcomePage from "../pages/WelcomePage";
import Quiz from "../components/play/Quiz";
import Footer from "../components/Footer";

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
        <Route path="/play" component={Quiz} />
        <Route exact path="/protected" component={Protected} />
        <Route exact path="/question/new" component={UploadNewQuestion} />
        <Route exact path="/admin" component={Profile} />
        <Route component={Quiz} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default Router;
