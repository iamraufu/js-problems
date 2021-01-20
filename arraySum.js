var numbers = [1, 3, 5, 7, 23, 16, 25];

function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum += element;
    }
    return sum;
}
console.log("Total of numbers: ", arraySum(numbers));