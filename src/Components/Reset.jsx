import React from "react";
import GameState from "./GameState";

// function resetHandle()

const Reset = ({ gameState,setGameState,setPlayerTurn,setTiles,setStrikeClass }) => {
  if (gameState === GameState.inProgress) {
    return ;//dont show reset btn if game was not Over!
  }
  return (
    <div>
      <button className="reset-btn"
       onClick={ ()=>{ //instead of writing function here , We can direclty write function in TicTacToe comp and pass the function .
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn("X");
        setStrikeClass();
      }}> Reset</button>
    </div>
  );
};

export default Reset;
