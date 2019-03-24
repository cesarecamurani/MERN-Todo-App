import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="https://reactjs.org/" target="_blank">
              <img src={logo} width="50" height="50" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">
              <font face="Courier" color="white">
                MERN-Stack Todo App
              </font></Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    <font face="Courier" color="white">
                      Todos
                    </font>
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    <font face="Courier" color="white">
                      Create Todo
                    </font>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}
export default App;
