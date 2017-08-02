export const SET_BOARD = 'set_board';

export function generateLife () {
  let life = [];
  for (var i = 0; i < 10; i++) {
    let row = [];
    for (var j = 0; j < 10; j++) {
      let val = Math.round(Math.random());
      row.push(val);
    }
    life.push(row);
  }
  return {
    type: SET_BOARD,
    payload: life
  };
}
