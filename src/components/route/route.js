import { Route, Switch } from "react-router";
import Home from "../../pages/home";
import About from "../../pages/about";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
  </Switch>
);
