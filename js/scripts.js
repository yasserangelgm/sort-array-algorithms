"use strict";

var colorPalette = [
  "#85D6AC",
  "#99DD98",
  "#D3E3AB",
  "#E4C5AF",
  "#488A2E",
  "#D2B579",
  "#A7DE9C",
  "#216334",
  "#C2E2A7",
  "#556F25",
  "#D6EE45",
  "#ABE3D2",
  "#D9D98C",
  "#8585D6",
  "#CA85D6",
  "#A9E2A7",
  "#BF5B40",
  "#4C3BB0",
  "#C6CFEC",
  "#632C21",
];

const valueArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

function FisherYatesShuffle() {
  const orderedArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  var index, temp;
  var shuffledArray = orderedArray;
  for (var i = shuffledArray.length - 1; i >= 1; i--) {
    index = Math.floor(Math.random() * shuffledArray.length);
    temp = shuffledArray[index];
    shuffledArray[index] = shuffledArray[i];
    shuffledArray[i] = temp;
  }
  return shuffledArray;
}

function createBar(width, value) {
  //Create the div for the bar and the number box
  var barContainer = document.createElement("div");
  barContainer.setAttribute("class", "barContainer");
  barContainer.setAttribute("id", value);

  //create the bar div
  var bar = document.createElement("div");
  var height = value * 6;
  bar.style.width = width;
  bar.style.height = height.toString() + "px";
  bar.style.backgroundColor = colorPalette[value - 1];
  bar.setAttribute("class", "bar");
  //create the number box
  var numBox = document.createElement("div");
  numBox.setAttribute("class", "numberBox");
  numBox.style.outlineColor = colorPalette[value - 1];
  numBox.style.color = colorPalette[value - 1];
  var number = document.createTextNode(value.toString());
  numBox.appendChild(number);
  barContainer.appendChild(bar);
  barContainer.appendChild(numBox);
  return barContainer;
}

function placeBarsInDemoArea(values) {
  var barsArea = document.querySelector("#demoArea");
  var shuffleBar;
  for (var i = 0; i < values.length; i++) {
    shuffleBar = createBar("40px", values[i]);
    barsArea.appendChild(shuffleBar);
  }
}

var shuffledArray = FisherYatesShuffle();
placeBarsInDemoArea(shuffledArray);

function obtainDivArray() {
  var bars = document.querySelector("#demoArea");
  var nodeList = bars.childNodes;
  var array = [];
  for (var i = 0; i < nodeList.length; i++) {
    array[i] = nodeList[i];
  }
  return array;
}

var divArray = obtainDivArray();
console.log(divArray);
