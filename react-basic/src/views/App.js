import "../styles/App.scss";
import Nav from "../routes/Nav";
import Home from "../components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "../components/Users";
import About from "../components/About";
import DetailUser from "../components/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
