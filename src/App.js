import Game from "./features/counter/Game.js";
import AddPlayer from "./features/counter/AddPlayer.js";
import "./App.css";

function App() {
  return (
    <main className="App">
      <AddPlayer />
      <Game />
    </main>
  );
}

export default App;
