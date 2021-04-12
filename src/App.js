import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Views/Home";
import About from "./Views/About";
import CounterExample from "./Views/CounterExample";
// import User from "./Views/User";


function App() {

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/counter-example">
              <CounterExample />
            </Route>
            {/* <Route path="/user/:userInput">
              <User />
            </Route> */}
          </Switch>

        </BrowserRouter>
      </div>
    );
  
}

export default App;
