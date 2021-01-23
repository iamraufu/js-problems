function fibonacciIterative(num) {
    var fibo = [1, 1];
    for (var i = 2; i < num; i++) {
        var nextFibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextFibo);
    }
    return fibo;
}

function fibonacciRecursive(num) {
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [1, 1];
    }
    var fibo = fibonacciRecursive(num - 1);
    var nextFibo = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextFibo);
    return fibo;
}
console.log(fibonacciRecursive(10));