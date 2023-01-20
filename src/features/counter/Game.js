import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./playerSlice";

const Game = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const playerCountList = players.map((player) => player.count);
  const winnerIs = playerCountList.reduce((a, b) => Math.max(a, b), -Infinity);

  function showWinnerName() {
    const winnerPlayer = players.filter((player) => player.count === winnerIs);
    return winnerPlayer.map((player) => player.name).join(" VS ");
  }

  //This clg runs 2 times, idk why
  console.log(showWinnerName());

  const renderedPlayers = players.map((player) => (
    <div key={player.id}>
      <h3>{player.name}</h3>
      <p>{player.count}</p>
      <p>{player.title}</p>
      <p>{player.id}</p>
      <p>Winner is: {showWinnerName()}</p>
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
