

// function changeDirection(instruction) {
//   if direction = 'E' & instruction[0] = 'L'
//     then newDirection = 'N'
// }

// function updateCoordinates(instruction)
// update currentPosition based on direction
// if direction == 'W'
//   then L5 means +5 on the Y axis
// if direction == 'S'
//   then R3 means -3 on the X axis

// function calculateDistance(startingPosition, currentPosition)
//   absolute(startingPosition - currentPosition)

// function main() {
//   console.log(changeDirection('L'));
//   console.log(changeDirection('R'));

// export default (instructions) =>
//   const cardinalDirections = ['N', 'W', 'S', 'E'];
// var startingPosition = [0, 0];
// var currentDirection = 'N'; // N, W, S, E
// var currentPosition = [0, 0];

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function dayOne(year) {
  return is4thYear(year);
}

function is4thYear(year) {
  return true;
}

exports["default"] = dayOne;
module.exports = exports["default"];