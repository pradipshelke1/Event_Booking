import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./root/layout/navbar/Navbar";
import Home from "./root/layout/home/Home";
import FreeEvents from "./events/free-events/FreeEvents";
import ProEvents from "./events/pro-events/ProEvents";
import UploadEvent from "./events/upload-event/UploadEvent";
import Login from "./users/login/Login";
import Register from "./users/register/Register";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events/free" component={FreeEvents} />
          <Route exact path="/events/pro" component={ProEvents} />
          <Route exact path="/events/upload" component={UploadEvent} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
