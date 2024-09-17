import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
const player_X = "X";
const player_O = "O";

 const winningPossibilities=[
    { possibility:[0,1,2],strikeClass:"strike-r1" },
    { possibility:[3,4,5],strikeClass:"strike-r2" },
    { possibility:[6,7,8],strikeClass:"strike-r3" },
    { possibility:[0,3,6],strikeClass:"strike-c1" },
    { possibility:[1,4,7],strikeClass:"strike-c2" },
    { possibility:[2,5,8],strikeClass:"strike-c3" },
    { possibility:[0,4,8],strikeClass:"strike-d1" },
    { possibility:[2,4,6],strikeClass:"strike-d2" },
    
 ]

function checkWinner(tiles, setStrikeClass, setGameState) {
    for (const { possibility, strikeClass } of winningPossibilities) {
      const [a, b, c] = possibility;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setStrikeClass(strikeClass); //marking winnner
  
        // Logging to identify which player is winning
        console.log(`Winner found: ${tiles[a]}`);
  
        if (tiles[a] === player_X) {
          setGameState(GameState.playerXWins);
        } else if (tiles[a] === player_O) {
          setGameState(GameState.playerOWins);
        }
  
        return; // Stop further checks after a winner is found
      }
    }
  
    // Check for a draw if no winner is found
    const areAllTilesFilled = tiles.every((ele) => ele !== null);
    if (areAllTilesFilled) {
      setGameState(GameState.draw);
    }
  }

//Functional COmponent

const TicTacToe = () => {
//State Variables

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState,setGameState]=useState(GameState.inProgress);

//UseEffext

  useEffect(() => {
    checkWinner(tiles,setStrikeClass,setGameState);
  }, [tiles]);

  useEffect(() => {
    console.log("Game State:", gameState); //just for debugging purpose i used this
  }, [gameState]);


  //Function
    
  const TileClick = (index) => {
    if (tiles[index] !== null || gameState!==GameState.inProgress) {
      return; //if its already marked ,dont change And if game wins no clicking possible 
    }

    console.log(index);
    const newTiles = [ ...tiles ];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
  
    setPlayerTurn(playerTurn === player_X ? player_O : player_X);
   
  };

    //JSX

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        onTileClick={TileClick}
        tiles={tiles}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState}/>
      <Reset gameState={gameState} setGameState={setGameState} setTiles={setTiles} setPlayerTurn={setPlayerTurn} setStrikeClass={setStrikeClass}/>
    </div>
  );
};
export default TicTacToe;
