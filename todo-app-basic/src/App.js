import "./styles/App.scss";
import background from "./assets/images/background.jpg";

import ListItems from "./components/listItems";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ListItems />
      </header>
    </div>
  );
}

export default App;
