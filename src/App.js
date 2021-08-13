import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PageRouter from "./components/route/route.js";
import useHashLocation from "./services/wouter-hash";

import "./styles/styles.css";

function App() {
  return (
    <Router hook={useHashLocation}>
      <header className="header">
        <div className="links">
          <a href="/#">&nbsp;Home&nbsp;</a>
          <span className="divider">|</span>
          <a href="/about">&nbsp;Resume&nbsp;</a>
          <span className="divider">|</span>
          <a target="_blank" href="http://www.linkedin.com/in/elysiasmyers">
            &nbsp;LinkedIn&nbsp;
          </a>
        </div>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}

export default App;
