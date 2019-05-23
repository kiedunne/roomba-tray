const fs = require("fs");
require("./floor.js");
const Roomba = require("./roomba.js");
const Floor = require("./floor.js");

class Input {
  constructor() {
    this.directions = "";
    this.floor = [];
    this.roomba = [];
  }

  getData() {
    fs.readFile("./input.txt", "utf-8", (err, data) => {
      if (err) throw err;
      const input = data.split("\n");
      this.directions = input.pop().split("");
      const floorArea = input
        .shift()
        .split(" ")
        .map(element => {
          return parseInt(element);
        });
      this.roomba = new Roomba(input.shift().split(" "));

      const dirtPatches = input.map(patch => {
        return patch.split(" ").map(element => {
          return parseInt(element);
        });
      });
      this.floor = new Floor(floorArea, dirtPatches, this.roomba);
      this.cleanRoom();
    });
  }
  cleanRoom() {
    this.directions.map(direction => {
      if (direction === "N" && this.roomba.y < this.floor.y) {
        this.roomba.y += 1;
        this.floor.checkDirtPatches([this.roomba.x, this.roomba.y]);
      } else if (direction === "E" && this.roomba.x < this.floor.x) {
        this.roomba.x += 1;
        this.floor.checkDirtPatches([this.roomba.x, this.roomba.y]);
      } else if (direction === "S" && this.roomba.y > 0) {
        this.roomba.y -= 1;
        this.floor.checkDirtPatches([this.roomba.x, this.roomba.y]);
      } else if (direction === "W" && this.roomba.x > 0) {
        this.roomba.x -= 1;
        this.floor.checkDirtPatches([this.roomba.x, this.roomba.y]);
      }
    });
    console.log(this.roomba.x, this.roomba.y);
    console.log(this.floor.cleanedPatches);
  }
}
input = new Input();
input.getData();
