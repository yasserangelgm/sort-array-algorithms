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
  "#D6EECD",
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

function createBar(width, value) {
  var bar = document.createElement("div");
  var height = value * 6;
  bar.style.width = width;
  bar.style.height = height.toString() + "px";
  bar.style.backgroundColor = colorPalette[value - 1];
  bar.setAttribute("class", "bar");
  return bar;
}

var miBarra = createBar("40px", 13);
var barContainer = document.querySelector("#barContainer");
barContainer.appendChild(miBarra);
miBarra = createBar("40px", 8);
barContainer.appendChild(miBarra);
miBarra = createBar("40px", 3);
barContainer.appendChild(miBarra);
miBarra = createBar("40px", 20);
barContainer.appendChild(miBarra);
miBarra = createBar("40px", 18);
barContainer.appendChild(miBarra);
miBarra = createBar("40px", 1);
barContainer.appendChild(miBarra);
