import Game from "./features/components/Game.js";
import AddPlayer from "./features/components/AddPlayer.js";
import DisplayWinner from "./features/components/DisplayWinner";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <AddPlayer />
      </header>
      <main className="App">
        <Game />
      </main>
      <DisplayWinner />
    </div>
  );
}

export default App;
