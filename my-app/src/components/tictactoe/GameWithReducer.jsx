import React, { useState, useReducer } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log("gameReducer ~ nextState", nextState);
      // board[index] = state.xIsNext ? "X" : "O";
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: 'CLICK', payload: {}}
  // dispatch({type: 'CLICK'})

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({ type: "CLICK", payload: { index, winner } });
  };
  const handleResetGame = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
