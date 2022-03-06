import "./App.scss";
import Nav from "./views/navigation/Nav";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
      </div>

      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/about" element={<About />} />
      </Switch>
    </Router>
  );
}

export default App;
