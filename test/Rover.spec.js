"use strict"

const chai = require("chai");
const expect = chai.expect;
const Rover = require("../classes/Rover");
const Plateau = require("../classes/Plateau");

describe("Rover Class", function () {
  const objInitUpperRightCoordinates = {'numAxisX': 5, 'numAxisY': 5};
  const objPlateau = new Plateau(objInitUpperRightCoordinates)
  const strCommand = "RM";
  describe("Test new Rover(objInitCoordinates, strInitDirection) constructor:", function () {
    const objRover = new Rover(objPlateau);
    it("The first argument (objRover.objPlateau) is required", function () {
      expect(objRover.objPlateau).to.not.equal(undefined);
    });
    it("The second argument (objInitCoordinates) should use the default coordinates: {'numAxisX': 0, 'numAxisY': 0}, " +
      "if non is provided", function () {
      expect(objRover.objCurrentCoordinates).to.deep.equal({'numAxisX': 0, 'numAxisY': 0});
    });
    it("The third argument (objRover.strInitDirection) should use the default direction: 'N', if non is provided",
      function () {
      expect(objRover.strCurrentDirection).to.equal('N');
    });
    it("The class variable (objRover.arrCompassDirections) should contain: ['N', 'E', 'S', 'W']", function () {
      expect(objRover.arrCompassDirections).to.have.members(['N', 'E', 'S', 'W']);
    });
    it("The class variable (objRover.numLowestIndex) should be: 0", function () {
      expect(objRover.numLowestIndex).to.equal(0);
    });
    it("The class variable (objRover.numHighestIndex) should be: 3", function () {
      expect(objRover.numHighestIndex).to.equal(3);
    });
  });

  describe("Test objRover.turnLeft():", function () {
    const objRover = new Rover(objPlateau);
    it("The rover should turn from north ('N') to west ('W') when turnLeft() is called", function () {
      objRover.turnLeft();
      expect(objRover.strCurrentDirection).to.equal("W");
    });
  });

  describe("Test objRover.turnRight():", function () {
    const objRover = new Rover(objPlateau);
    it("The rover should turn from north ('N') to west ('E') when turnRight() is called", function () {
      objRover.turnRight();
      expect(objRover.strCurrentDirection).to.equal("E");
    });
  });

  describe("Test objRover.moveForward():", function () {
    const objRover = new Rover(objPlateau);
    it("The rover should move one grid point forward, in the northern direction, when moveForward() is called",
      function () {
      objRover.moveForward();
      expect(objRover.objCurrentCoordinates.numAxisY).to.equal(1);
    });
  });

  describe("Test objRover.executeCommand():", function () {
    const objRover = new Rover(objPlateau);
    it("The rover should turn right, then move one grid point forward, in the eastern direction, " +
      "when executeCommand() is called",
      function () {
      objRover.executeCommand(strCommand);
      expect(strCommand).to.be.a('string');
      expect(objRover.objCurrentCoordinates.numAxisX).to.equal(1);
      expect(objRover.strCurrentDirection).to.equal('E');
    });
  });
});