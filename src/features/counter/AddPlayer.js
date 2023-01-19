import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { playerAdded } from "./playerSlice";
import React from "react";

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
      <h2>Add New Player</h2>
      <form>
        <label htmlFor="playerName">Player Name:</label>
        <input
          type="text"
          id="playerName"
          name="playerName"
          value={name}
          onChange={onNameChanged}
        ></input>
        <label htmlFor="playerTitle">Player Title:</label>
        <input
          type="text"
          id="playerTitle"
          name="playerTitle"
          value={title}
          onChange={onTitleChanged}
        ></input>
        <button onClick={onPlayerAdded} type="button" disabled={!canSave}>
          Enter Player
        </button>
      </form>
    </section>
  );
};

export default AddPlayer;
