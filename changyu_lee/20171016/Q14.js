var fibonacci = function(n) {
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (var i = 2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

