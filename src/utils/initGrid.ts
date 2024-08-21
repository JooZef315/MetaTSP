import { TCoords } from "../types";

const ROWS_NUM = 50;
const COLS_NUM = 50;

export const createInitGrid = () => {
  const initGrid: TCoords[] = [];

  for (let i = 0; i < ROWS_NUM; i++) {
    const row: TCoords = [];
    for (let j = 0; j < COLS_NUM; j++) {
      row.push([i * 10, j * 10]);
    }
    initGrid.push(row);
  }

  return initGrid;
};
