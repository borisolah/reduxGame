import { useSelector } from "react-redux";
import "./displaywinner.css";

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
    <div className="displayWinner">
      <div className="winnerIsText">The Winner Is: </div>
      <h1 className="winnerNameDisplayed">{showWinnerName()}</h1>
    </div>
  );
};

export default DisplayWinner;
