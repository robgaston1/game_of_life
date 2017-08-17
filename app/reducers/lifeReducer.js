import { RESET_LIFE } from '../actions';
import { CHANGE_SQUARE } from '../actions';
import { CYCLE_LIFE } from '../actions';
import { CLEAR_BOARD } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case RESET_LIFE:
      return action.payload;
    case CHANGE_SQUARE:
      return changeSquare(state, action.payload);
    case CYCLE_LIFE:
      return cycleLife(state);
    case CLEAR_BOARD:
      return clearBoard(state);
    default:
      return state;
  }
}

function changeSquare (state, target) {
  var id = target.getAttribute('data-reactid').split(".");
  var row = id[5].substring(1);
  var index = id[6].substring(1);
  let lifeArray = state.slice();
  lifeArray[row][index] === 1 ? lifeArray[row][index] = 0 : lifeArray[row][index] = 1;
  return lifeArray;
}

function cycleLife (state) {
  let lifeArray = state.slice();
  for (let i = 0; i < lifeArray.length; i++) {
    for (let j = 0; j < lifeArray[i].length; j++) {
      let amtNeighbors = checkNeighbors(state, j, i);
      if (lifeArray[i][j] === 0 && amtNeighbors === 3) {
        lifeArray[i][j] = 1;
      } else if (lifeArray[i][j] === 1 && (amtNeighbors < 2 || amtNeighbors > 3)) {
        lifeArray[i][j] = 0;
      }
    }
  }
  //Need to figure out a way to increase the generation and to toggle the cycle to turn off when there is no life
  return lifeArray;
}

function checkNeighbors (state, cellX, cellY) {
  var acc = 0;
  var coordinates = [[-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
  var neighbors = coordinates.forEach((coords) => {
    var neighborX = cellX + coords[0];
    var neighborY = cellY + coords[1];
    if (neighborX >= 0 && neighborY >=0 && neighborY < state.length) {
      var neighborCoord = state[neighborY][neighborX];
      if (neighborCoord !== 'undefined' && neighborCoord === 1) {
        acc++;
      }
    }
  });
  return acc;
}

function clearBoard (state) {
  let lifeArray = [];
  for (let i = 0; i < state.length; i++) {
    let row = state[i].map(() => { return 0 });
    lifeArray.push(row);
  }
  return lifeArray;
}
