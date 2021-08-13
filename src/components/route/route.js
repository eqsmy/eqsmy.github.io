import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";

export default () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Route
      render={({ location }) => (
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      )}
    />
  </HashRouter>
);
