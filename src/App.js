import React from 'react';
import Button from 'react-bootstrap/Button';

import './App.css';
import './images/images';
import './components/newUser';
import './components/userLogin';
import './components/calendar';

const routes = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/createUser",
        component: newUser
      },
      {
        path: "/userLogin",
        component: loginUser
      }
    ]
  },
  {
    path: "/calendar",
    component: createUser,
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">Buzy Bees</header>
        <img src="./images/BusyBee.png" alt="logo" />
        <p>
          Welcome to Buzy Bees, an all-in-one calendar to help you organise your busy schedules and the rest of the familys'!
        </p>
    </div>
  );
}

export default App;
