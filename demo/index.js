const RoverMainframe = require("../classes/RoverMainframe");
const Rover = require("../classes/Rover");
const Plateau = require("../classes/Plateau");

// input
const strInput = `5 5
                  
                  1 2 N
                  
                  LMLMLMLMM
                  
                  3 3 E
                  
                  MMRMMRMRRM`;

const objRoverMainframe = new RoverMainframe(strInput, Rover, Plateau);
objRoverMainframe.deployRovers();

// output
objRoverMainframe.arrRoverInstances.forEach(rover => {
  console.log([
    rover.objCurrentCoordinates.numAxisX,
    rover.objCurrentCoordinates.numAxisY,
    rover.strCurrentDirection
  ].join(' '));
})