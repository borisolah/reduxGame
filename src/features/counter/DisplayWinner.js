import { useSelector } from "react-redux";

const DisplayWinner = () => {
  const players = useSelector((state) => state.players);

  const playerCountList = players.map((player) => player.count);
  const winnerIs = playerCountList.reduce((a, b) => Math.max(a, b), -Infinity);

  function showWinnerName() {
    const winnerPlayer = players.filter((player) => player.count === winnerIs);
    return winnerPlayer.map((player) => player.name).join(" VS ");
  }

  //This clg runs 2 times, idk why
  console.log(showWinnerName());
  console.log("first");

  return (
    <header>
      <div>DisplayWinner</div>
      <h1>{showWinnerName()}</h1>
    </header>
  );
};

export default DisplayWinner;
