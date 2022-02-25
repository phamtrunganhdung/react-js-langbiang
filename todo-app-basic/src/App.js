import "./styles/App.scss";
import background from "./assets/images/background.jpg";
import Todo from "./components/todos";

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
        <Todo />
      </header>
    </div>
  );
}

export default App;
