/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The backobject pocketNum property value:", backpack.pocketNum);
console.log("The straplength left property value:", backpack.strapLength.left);
var query = "pocketNum";

console.log(
  "Using bracket notation, backobject pocketNum property value:",
  backpack[query]
);
