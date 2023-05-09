var directionss;
(function (directionss) {
    directionss[directionss["East"] = 0] = "East";
    directionss[directionss["West"] = 1] = "West";
    directionss[directionss["South"] = 2] = "South";
    directionss[directionss["North"] = 3] = "North";
})(directionss || (directionss = {}));
console.log(directionss.East);
console.log(directionss.North);
console.log(directionss.South);
console.log(directionss.West);
console.log(directionss[0]);
console.log(directionss[1]);
console.log(directionss[2]);
console.log(directionss[3]);
