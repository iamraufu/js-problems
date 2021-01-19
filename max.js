var x = 120;
var y = 150;
var z = 180;
if (x > y && x > z) {
    console.log("x is bigger");
} else if (y > x && y > z) {
    console.log("y is bigger");
} else {
    console.log("z is bigger");
}
console.log(Math.max(x, y, z));