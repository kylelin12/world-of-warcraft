var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.floor(Math.random() * boxWidth);
var targetY = Math.floor(Math.random() * boxHeight);


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
    e = e || window.event;
	
	var mx = e.pageX;
	var my = e.pageY;

    var dist = distance(targetX, targetY, mx, my);
    var percent = perDiag(dist);
    var rgbastring = rgba(percent);
    changeColor(rgbastring);
};

// Function to get percentage of distance from target over diagonal radius of box
var perDiag = function(distance) {
    var percent;
    var diagRadius = Math.sqrt(boxHeight * boxHeight + boxWidth * boxWidth) / 2;
    percent = distance / diagRadius;
    return percent.toFixed(2);
};

// Function for "rgba(0, 0, 0, x)"
var rgba = function(percent) {
    var rgba = "rgba(0, 0, 0, " + percent + ")";
    return rgba;
};

// Function to change color of box
var changeColor = function(rgba) {
    box.setAttribute("style", 'background: ' + rgba);
};

box.addEventListener("mousemove", findIt);

