import { Route, Redirect, Switch } from "react-router";
import Home from "../../pages/home";
import About from "../../pages/about";

export default () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
  </Switch>
);
