import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

import BankTransfer from "./pages/BankTransfer/BankTranfer";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import RequestPage from "./pages/RequestPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/requests" component={RequestPage} />
          <Route exact path="/requests/:id" component={DetailPage} />
          <Route exact path="/donate/:id" component={BankTransfer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
