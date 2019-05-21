const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const commands = data.split("\n");
  console.log(commands);

  const directions = commands.pop().split("");
  const floor = commands.shift().split(" ");
  const roomba = commands.shift().split(" ");

  const floorCoordinates = parseCoordinates(floor);
  const roombaCoordinates = parseCoordinates(roomba);

  const dirtPatches = commands.map(patch => {
    return patch.split(" ").map(element => {
      return parseInt(element);
    });
  });

  console.log(floorCoordinates);
  console.log(roombaCoordinates);
  console.log(dirtPatches);
  console.log(directions);
});

parseCoordinates = data => {
  let parsedData = data.map(element => {
    return parseInt(element);
  });
  return parsedData;
};
