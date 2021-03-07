import CountryInfo from "./component/CountryInfo/CountryInfo";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:countryName">
          <CountryInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
