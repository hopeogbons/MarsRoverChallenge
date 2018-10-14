'use strict';

class Plateau {
  constructor(objInitUpperRightCoordinates, objInitLowerLeftCoordinates = {'numAxisX': 0, 'numAxisY': 0}) {
    this.objUpperRightCoordinates = objInitUpperRightCoordinates;
    this.objLowerLeftCoordinates = objInitLowerLeftCoordinates;
  }
}

module.exports = Plateau;