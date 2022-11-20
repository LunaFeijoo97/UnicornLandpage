var backgroundColors = ["#4a4a69", "#efc3e6"];
var colorIndex = 0;
function changeBackground() {
  var col = document.body;
  if (colorIndex >= backgroundColors.length) {
    colorIndex = 0;
  }
  col.style.backgroundColor = backgroundColors[colorIndex];
  colorIndex++;
}

var headerColors = ["#363852", "#dd9ed0"];
var colorsIndex = 0;
function changeHeader() {
  var head = document.getElementById("container");
  if (colorsIndex >= headerColors.length) {
    colorsIndex = 0;
  }
  head.style.backgroundColor = headerColors[colorsIndex];
  colorsIndex++;
}

var footerColors = ["#363852", "#dd9ed0"];
var colorIndexes = 0;
function changeFooter() {
  var foot = document.getElementById("footer");
  if (colorIndexes >= footerColors.length) {
    colorIndexes = 0;
  }
  foot.style.backgroundColor = footerColors[colorIndexes];
  colorIndexes++;
}

var btnColors = ["#363852", "#dd9ed0"];
var colorsIndexes = 0;
function changeBtn() {
  var btn = document.getElementById("btn");
  if (colorsIndexes >= btnColors.length) {
    colorsIndexes = 0;
  }
  btn.style.backgroundColor = btnColors[colorsIndexes];
  colorsIndexes++;
}
