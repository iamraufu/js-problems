var string = "Eftykhar Rahman Raufu Prezens";

var reverse = " ";

function reverseString(str) {
    for (var i = 0; i < str.length; i++) {
        var char = string[i];
        reverse = char + reverse;
    }
    return reverse;
}
console.log(reverseString(string));