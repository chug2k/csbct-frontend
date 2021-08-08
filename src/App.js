import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BankTransfer from "./pages/BankTransfer/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/BankTransfer" component={BankTransfer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
