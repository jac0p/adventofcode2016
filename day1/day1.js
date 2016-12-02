let directions = "R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1";

let currentDirection = "N";
let currentPosition = [0, 0];
let visited = new Set();
visited.add(`${currentPosition[0]},${currentPosition[1]}`);

const orientationHelper = {
  "W" : {"L": "S", "R": "N"},
  "N" : {"L": "W", "R": "E"},
  "E" : {"L": "N", "R": "S"},
  "S" : {"L": "E", "R": "W"}
}

const directionHelper = { 
  "W" : {"L": "negative_y", "R": "positive_y"},
  "N" : {"L": "negative_x", "R": "positive_x"},
  "E" : {"L": "positive_y", "R": "negative_y"},
  "S" : {"L": "positive_x", "R": "negative_x"}
}


function changeDirection(turn) {
  currentDirection = orientationHelper[currentDirection][turn];
}

function checkIfVisited() {
  let key = `${currentPosition[0]},${currentPosition[1]}`;
  if (visited.has(key)) {
    return calculateDistance();
  } else {
    visited.add(key);
  }
}

function updateCoordinates(instruction) {
  turn = instruction[0];
  step = parseInt(instruction.slice(1));

  switch (directionHelper[currentDirection][turn]) {
    case 'negative_y':
      currentPosition[1] -= step; 
      break;
    case 'positive_y':
      currentPosition[1] += step;
      break;
    case 'negative_x':
      currentPosition[0] -= step;
      break;
    case 'positive_x':
      currentPosition[0] += step;
      break;
  } 
  changeDirection(turn);
  checkIfVisited();
}

function calculateDistance() {
  return Math.abs(currentPosition[0]) + Math.abs(currentPosition[1]);
}

function main() {
  data = directions.split(", ");
  for (let i = 0; i < data.length; i++) { updateCoordinates(data[i]); }
  console.log(`CURRENT POSITION: ${currentPosition}`);
  console.log(`DISTANCE: ${calculateDistance()}`);

  console.log("======================================");

}

main();


// export default dayOne;
