import React from 'react';
import Square from "./components/Square";
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  );
}
