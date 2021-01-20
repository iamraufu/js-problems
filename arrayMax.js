var marks = [48, 50, 52, 60, 65, 79, 82, 85, 83, 87, 89, 90, 92, 95, 99];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest value is: ", max);