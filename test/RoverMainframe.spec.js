"use strict"

const chai = require("chai");
const expect = chai.expect;
const RoverMainframe = require("../classes/RoverMainframe");
const Rover = require('../classes/Rover');
const Plateau = require('../classes/Plateau');

describe("RoverMainframe Class", function () {
  const strCommand = "5 5\n\n 1 2 N\n M";
  const strPlateauData = '5 5';
  const arrRoverData = ["1 2 N", "M", "3 3 E", "MRMMMLMRMMLLR"];
  describe("Test new RoverMainframe(strInput) constructor:", function () {
    it("The first argument is required", function () {
      const objRoverMainframe = new RoverMainframe(strCommand, Rover, Plateau);
      expect(objRoverMainframe.strInput).to.not.equal(undefined);
    });
  });

  describe("Test objRoverMainframe.processInput():", function () {
    const objRoverMainframe = new RoverMainframe(strCommand, Rover, Plateau);
    it("The output should be a well defined object", function () {
      expect(objRoverMainframe.processInput()).to.include.all.keys('objPlateauUpperRightCoordinates',
        'arrRoverCoordinatesAndDirections');
    });
  });

  describe("Test objRoverMainframe.processPlateauData(strPlateauData):", function () {
    it("The input should be a string", function () {
      expect(strPlateauData).to.be.a('string');
    });
    it("The output should be a well defined object", function () {
      expect(RoverMainframe.processPlateauData(strPlateauData)).to.be.an('object');
      expect(RoverMainframe.processPlateauData(strPlateauData)).to.deep.equal({'numAxisX': 5, 'numAxisY': 5});
    });
  });

  describe("Test objRoverMainframe.processRoverData(arrRoverData):", function () {
    it("The input should be an array", function () {
      expect(arrRoverData).to.be.an('array');
    });
    it("The output should be a well defined array", function () {
      expect(RoverMainframe.processRoverData(arrRoverData)).to.be.an('array');
      expect(RoverMainframe.processRoverData(arrRoverData)).to.deep.equal([
        {
          numAxisX: 1,
          numAxisY: 2,
          strDirection: 'N',
          strCommands: 'M'
        },
        {
          numAxisX: 3,
          numAxisY: 3,
          strDirection: 'E',
          strCommands: 'MRMMMLMRMMLLR'
        }
      ]);
    });
  });

  describe("Test objRoverMainframe.deployRovers():", function () {
    const objRoverMainframe = new RoverMainframe(strCommand, Rover, Plateau);
    objRoverMainframe.deployRovers();
    it("There should be an array of rover instance(s)", function () {
      expect(objRoverMainframe.arrRoverInstances).to.be.an('array');
      expect(objRoverMainframe.arrRoverInstances.length).to.equal(1);
    });
  });
});