import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./playerSlice";

const Game = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const renderedPlayers = players.map((player) => (
    <div key={player.id}>
      <h3 style={{ "text-align": "center" }}>{player.name}</h3>
      <p style={{ "text-align": "center" }}>{player.title}</p>
      <div className="bigBox">
        <button
          className="button"
          onClick={() => dispatch(decrement(player.id))}
        >
          -
        </button>
        <div class="container">
          <div
            class="progressBar skills html"
            style={{ width: player.count + "%" }}
          ></div>
        </div>
        <button onClick={() => dispatch(increment(player.id))}>+</button>
      </div>
    </div>
  ));

  return (
    <section>
      <h2>Game</h2>
      <br />
      {renderedPlayers}
    </section>
  );
};
export default Game;
