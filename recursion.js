function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

function recursiveFactorial(number) {
    if (number == 0 || number == 1) {
        return 1;
    } else {
        return number * recursiveFactorial(number - 1);
    }
}
console.log(recursiveFactorial(4));