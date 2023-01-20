import { useState } from "react";
import { useDispatch } from "react-redux";
import { playerAdded } from "../redux/playerSlice";
import "./addplayer.css";

const AddPlayer = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const onNameChanged = (e) => setName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);

  const onPlayerAdded = () => {
    if (name && title) {
      dispatch(playerAdded(name, title));
      setName("");
      setTitle("");
    }
  };

  const canSave = Boolean(name) && Boolean(title);

  return (
    <section>
      <h2 className="addNewPlayer">Add New Player</h2>
      <form className="newPlayerBox">
        <div className="inputBoxes">
          <label className="label" htmlFor="playerName">
            Name:
          </label>
          <input
            className="input inputOne"
            type="text"
            id="playerName"
            name="playerName"
            value={name}
            onChange={onNameChanged}
          ></input>
        </div>
        <div className="inputBoxes">
          <label className="label" htmlFor="playerTitle">
            Title:
          </label>
          <input
            className="input"
            type="text"
            id="playerTitle"
            name="playerTitle"
            value={title}
            onChange={onTitleChanged}
          ></input>
        </div>
      </form>
      <button
        className="addButton"
        onClick={onPlayerAdded}
        type="button"
        disabled={!canSave}
      >
        Enter
      </button>
    </section>
  );
};

export default AddPlayer;
