export const RESET_LIFE = 'reset_life';
export const CHANGE_SQUARE = 'change_square';
export const CYCLE_LIFE = 'cycle_life';
export const CLEAR_BOARD = 'clear_board';
export const ADD_GEN = 'add_gen';

export function generateLife (rows, columns) {
  let life = [];
  for (var i = 0; i < columns; i++) {
    let row = [];
    for (var j = 0; j < rows; j++) {
      let val = Math.round(Math.random());
      row.push(val);
    }
    life.push(row);
  }
  return {
    type: RESET_LIFE,
    payload: life
  };
}

export function changeSquare(target) {
  return {
    type: CHANGE_SQUARE,
    payload: target
  }
}

export function cycleLife() {
  return {
    type: CYCLE_LIFE
  }
}

export function clearBoard() {
  return {
    type: CLEAR_BOARD
  }
}

export function addGen() {
  return {
    type: ADD_GEN
  }
}
