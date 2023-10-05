import React, {useState} from 'react';
import Square from "./components/Square";
import Board from "./components/Board";

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board></Board>
      </div>
      <div className="game-info">
        <ol>
          list
        </ol>
      </div>
    </div>
  );
}