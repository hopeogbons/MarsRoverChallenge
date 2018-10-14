class Rover {
  constructor(objPlateau, objInitCoordinates = {'numAxisX': 0, 'numAxisY': 0}, strInitDirection = 'N') {
    this.objPlateau = objPlateau;
    this.objCurrentCoordinates = objInitCoordinates;
    this.strCurrentDirection = strInitDirection;
    this.arrCompassDirections = ['N', 'E', 'S', 'W'];
    this.numLowestIndex = this.arrCompassDirections.indexOf(this.arrCompassDirections[0]);
    this.numHighestIndex = this.arrCompassDirections.length - 1;
  }

  turnLeft() {
    const numCurrentIndex = this.arrCompassDirections.indexOf(this.strCurrentDirection);
    const numNextIndex = numCurrentIndex - 1;
    const numNewIndex = (numNextIndex >= this.numLowestIndex) ? numNextIndex : this.numHighestIndex;
    this.strCurrentDirection = this.arrCompassDirections[numNewIndex]
  }

  turnRight() {
    const numCurrentIndex = this.arrCompassDirections.indexOf(this.strCurrentDirection);
    const numNextIndex = numCurrentIndex + 1;
    const numNewIndex = (numNextIndex <= this.numHighestIndex) ? numNextIndex : this.numLowestIndex;
    this.strCurrentDirection = this.arrCompassDirections[numNewIndex]
  }

  moveForward() {
    switch (this.strCurrentDirection) {
      case 'N':
        if (this.objCurrentCoordinates.numAxisY === this.objPlateau.objUpperRightCoordinates.numAxisY) {
          throw Error('Plateau Boundary Exceeded! This command will throw the rover off the northern cliff!');
        }
        this.objCurrentCoordinates.numAxisY++;
        break;
      case 'E':
        if (this.objCurrentCoordinates.numAxisX === this.objPlateau.objUpperRightCoordinates.numAxisX) {
          throw Error('Plateau Boundary Exceeded! This command will throw the rover off the eastern cliff!');
        }
        this.objCurrentCoordinates.numAxisX++;
        break;
      case 'S':
        if (this.objCurrentCoordinates.numAxisY === this.objPlateau.objLowerLeftCoordinates.numAxisY) {
          throw Error('Plateau Boundary Exceeded! This command will throw the rover off the southern cliff!');
        }
        this.objCurrentCoordinates.numAxisY--;
        break;
      case 'W':
        if (this.objCurrentCoordinates.numAxisX === this.objPlateau.objLowerLeftCoordinates.numAxisX) {
          throw Error('Plateau Boundary Exceeded! This command will throw the rover off the western cliff!');
        }
        this.objCurrentCoordinates.numAxisX--;
        break;
    }
  }

  executeCommand(strCommands) {
    for (let i = 0; i < strCommands.length; i++) {
      switch (strCommands.charAt(i)) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'M':
          this.moveForward();
          break;
      }
    }
  }
}

module.exports = Rover;