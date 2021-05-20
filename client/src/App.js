import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CalendarView from "./pages/calendarView/index";
import DayView from "./pages/dayView/index";
import Homepage from "./pages/home/index"
// import Login  from "./pages/login/index";
// import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={["/calendar-month"]}>
            <CalendarView />
          </Route>
          <Route exact path="/date/:date">
          <DayView />
          </Route>
          <Route exact path={["/"]}>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

