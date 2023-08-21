import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import GameBoard from "./Components/Gameboard/Gameboard.js";

function App() {
  return (
    <div className="App-header">
      <GameBoard />
    </div>
  );
}

export default App;
