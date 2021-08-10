import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

import BankTransfer from "./pages/BankTransfer/BankTranfer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/requests/:id" component={DetailPage} />
          <Route exact path="/Banktransfer" component={BankTransfer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
