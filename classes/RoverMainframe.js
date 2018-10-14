class RoverMainframe {
  constructor(strInput, classRover, classPlateau) {
    this.strInput = strInput;
    this.classRover = classRover;
    this.classPlateau = classPlateau;
    this.arrRoverInstances = [];
  }

  processInput() {
    const arrProcessedInput = this.strInput.split('\n').map(i => i.trim()).filter(e => e);
    const arrPlateauData = arrProcessedInput.shift();

    return {
      objPlateauUpperRightCoordinates: RoverMainframe.processPlateauData(arrPlateauData),
      arrRoverCoordinatesAndDirections: RoverMainframe.processRoverData(arrProcessedInput)
    }
  }

  static processPlateauData(strPlateauData) {
    const arrPlateauData = strPlateauData.split(' ');
    return {
      'numAxisX': parseInt(arrPlateauData[0]),
      'numAxisY': parseInt(arrPlateauData[1])
    }
  }

  static processRoverData(arrRoverData) {
    const chunk = 2;
    const arrRoverCoordinatesAndDirections = [];

    for (let x = 0; x < arrRoverData.length; x += chunk) {
      const strInitData = arrRoverData.slice(x, x + chunk);
      const strInitCoordinates = strInitData[0].split(' ');
      arrRoverCoordinatesAndDirections.push({
        numAxisX: parseInt(strInitCoordinates[0]),
        numAxisY: parseInt(strInitCoordinates[1]),
        strDirection: strInitCoordinates[2],
        strCommands: strInitData[1]
      });
    }

    return arrRoverCoordinatesAndDirections;
  }

  deployRovers() {
    const objProcessedInput = this.processInput();
    const objPlateau = new this.classPlateau(objProcessedInput.objPlateauUpperRightCoordinates);
    objProcessedInput.arrRoverCoordinatesAndDirections.forEach(roverBootstrap => {
      const objInitCoordinates = { numAxisX: roverBootstrap.numAxisX, numAxisY: roverBootstrap.numAxisY };
      const strInitDirection = roverBootstrap.strDirection
      const rover = new this.classRover(objPlateau, objInitCoordinates, strInitDirection);
      rover.executeCommand(roverBootstrap.strCommands);
      this.arrRoverInstances.push(rover);
    })
  }
}

module.exports = RoverMainframe;