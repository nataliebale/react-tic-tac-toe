import React, {useState} from 'react';
import Board from "./components/Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove) {

  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0) {
      description = "Go to move #" + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li>
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
      </div>
      <div className="game-info">
        <ol>
          {moves.map((move, index) => {
            return (<div key={move}>
              {move}
            </div>);
          })}
        </ol>
      </div>
    </div>
  );
}