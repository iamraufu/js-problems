var name = [1, 3, 5, 2, 9, 7, 2, 3, 5, 9, 11, 7, 2, 2, 10];
var unique = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = unique.indexOf(element);
    if (index == -1) {
        unique.push(element);
    }
}
console.log(unique);