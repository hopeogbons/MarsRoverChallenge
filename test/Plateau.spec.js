'use strict'

const chai = require("chai");
const expect = chai.expect;
const Plateau = require("../classes/Plateau")

describe("Plateau Class:", () => {
  const objInitUpperRightCoordinates = {'numAxisX': 5, 'numAxisY': 5};
  describe("Test new Plateau() constructor:", function () {
    const plateau = new Plateau(objInitUpperRightCoordinates);
    it("The first argument (objInitUpperRightCoordinates) is required", () => {
      expect(plateau.objUpperRightCoordinates).to.not.equal(undefined);
    });
    it('The first argument (objInitUpperRightCoordinates) should be an object', () => {
      expect(plateau.objUpperRightCoordinates).to.be.an('object');
    });
    it("The second argument (objInitLowerLeftCoordinates) should use the default: " +
      "{'numAxisX': 0, 'numAxisY': 0}, if non is provided", () => {
      expect(plateau.objLowerLeftCoordinates).to.deep.equal({'numAxisX': 0, 'numAxisY': 0});
    });
    it('The second argument (objInitLowerLeftCoordinates) should be an object', () => {
      expect(plateau.objLowerLeftCoordinates).to.be.an('object');
    });
  });
})
