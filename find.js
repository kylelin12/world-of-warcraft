var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.floor(Math.random() * boxWidth); // Random X coordinate
var targetY = Math.floor(Math.random() * boxHeight); // Random Y coordinate


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );
console.log("Target Location: (" + targetX +", " + targetY +")");

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var px = x0 - x1;
  var py = y0 - y1;
  return Math.sqrt(px * px + py * py);
};

var mx; // Mouse X
var my; // Mouse Y

var findIt = function(e) {
	var mx = e.pageX; // Mouse X
	var my = e.pageY; // Mouse Y

    var dist = distance(targetX, targetY, mx, my); // Distance between the mouse and target
    var percent = perDiag(dist); // Percent of half of the diagonal away from the target
    var rgbastring = rgba(percent); // Returns "rgba(0, 0, 0, percent)"
    changeColor(rgbastring); // Changes the background color of the box
};

// Function to get percentage of distance from target over diagonal radius of box
var perDiag = function(distance) {
    var percent;
    var diagRadius = Math.sqrt(boxHeight * boxHeight + boxWidth * boxWidth) / 2; // Half of the diagonal distance
    percent = distance / diagRadius; // distance / half of the diagonal
    return percent.toFixed(2); // Returns percent rounded to 2 decimal places
};

// Function for "rgba(0, 0, 0, x)"
var rgba = function(percent) {
    var rgba = "rgba(0, 0, 0, " + percent + ")"; // rgba String formatted for css
    return rgba;
};

// Function to change color of box
var changeColor = function(rgba) {
    box.setAttribute("style", 'background: ' + rgba); // Changes the background color
};

box.addEventListener("mousemove", findIt);

