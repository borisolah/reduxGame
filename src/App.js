import Game from "./features/counter/Game.js";
import AddPlayer from "./features/counter/AddPlayer.js";
import DisplayWinner from "./features/counter/DisplayWinner";
import "./App.css";

function App() {
  return (
    <main className="App">
      <DisplayWinner />
      <AddPlayer />
      <Game />
    </main>
  );
}

export default App;
