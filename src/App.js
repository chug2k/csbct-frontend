import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/Nav";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import RequestPage from "./pages/RequestPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/request" component={RequestPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
