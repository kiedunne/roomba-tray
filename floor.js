class Floor {
  constructor(coordinates, dirtPatches, roomba) {
    this.x = coordinates[0];
    this.y = coordinates[1];
    this.dirtPatches = dirtPatches;
    this.roomba = roomba;
    this.coveredCoordinates = [];
    this.cleanedPatches = 0;
  }
  checkDirtPatches(coordinates) {
    this.coveredCoordinates = coordinates;
    console.log(this.coveredCoordinates);
    this.coveredCoordinates.forEach(cleaned => {
      this.dirtPatches.forEach(dirt => {
        if (cleaned === dirt) {
          this.cleanedPatches += 1;
        }
      });
    });

    console.log(this.cleanedPatches);
  }
}
module.exports = Floor;
