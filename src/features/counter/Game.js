import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./playerSlice";
import { useState } from "react";

const Game = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  /*  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
 */

  const renderedPlayers = players.map((player) => (
    <div key={player.id}>
      <h3>{player.name}</h3>
      <p>{player.count}</p>
      <p>{player.title}</p>
      <p>{player.id}</p>
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
      {renderedPlayers}
    </section>
  );
};
export default Game;
