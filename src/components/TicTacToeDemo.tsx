"use client";

import { useMemo, useState } from "react";

type Cell = "X" | "O" | null;
const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winner(board: Cell[]): Cell {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isDraw(board: Cell[]) {
  return !winner(board) && board.every((cell) => cell !== null);
}

// Minimax: AI plays "O" and always plays optimally against the human "X".
function minimax(board: Cell[], isMaximizing: boolean): number {
  const win = winner(board);
  if (win === "O") return 1;
  if (win === "X") return -1;
  if (isDraw(board)) return 0;

  const scores: number[] = [];
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      const next = [...board];
      next[i] = isMaximizing ? "O" : "X";
      scores.push(minimax(next, !isMaximizing));
    }
  }
  return isMaximizing ? Math.max(...scores) : Math.min(...scores);
}

function bestMove(board: Cell[]): number {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      const next = [...board];
      next[i] = "O";
      const score = minimax(next, false);
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

export default function TicTacToeDemo() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<"X" | "O">("X");

  const result = winner(board);
  const draw = isDraw(board);
  const over = result !== null || draw;

  const status = useMemo(() => {
    if (result === "X") return "You win.";
    if (result === "O") return "The AI wins.";
    if (draw) return "Draw.";
    return turn === "X" ? "Your move." : "AI is thinking…";
  }, [result, draw, turn]);

  function playerMove(i: number) {
    if (over || board[i] !== null || turn !== "X") return;

    const next = [...board];
    next[i] = "X";

    if (winner(next) || isDraw(next)) {
      setBoard(next);
      return;
    }

    const aiIndex = bestMove(next);
    if (aiIndex !== -1) next[aiIndex] = "O";
    setBoard(next);
    setTurn("X");
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setTurn("X");
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-7">
      <h3 className="font-serif-display text-lg text-foreground">
        Minimax Tic-Tac-Toe
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">
        A small, fully client-side AI demo — no backend, no API calls. The
        opponent plays a complete minimax search, so it never loses.
      </p>

      <div className="mt-6 grid w-[198px] grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => playerMove(i)}
            disabled={over || cell !== null}
            className="flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-background font-serif-display text-2xl text-foreground transition-colors hover:border-accent disabled:cursor-default"
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <p className="text-sm text-muted">{status}</p>
        <button
          onClick={reset}
          className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
