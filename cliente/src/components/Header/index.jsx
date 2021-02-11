import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, Contato, Produtos } from "../../pages";

import "./style.css";

const Header = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-md navbar-light bg-light menu">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    as={Link}
                    href="/"
                  >
                    Full-Stack<p>Eletro</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    as={Link}
                    href="/produtos"
                  >
                    Produtos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    as={Link}
                    href="/contato"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route exact path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
