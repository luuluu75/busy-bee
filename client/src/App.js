import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import Calendar from "./pages/calendar/index";
// import Login  from "./pages/login/index";
// import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/calendar", "/calendar/:id"]}>
            <Calendar />
          </Route>
          {/* <Route exact path={["/calendarItem", "/calendarItem/:id"]}>
            <Login />
          </Route> */}
          <Route exact path={["/"]}>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

