var numberOfPrime = function (n) {
    var arr = [2];
    for (var i = 2; i<=n; i++) {
        for (var j = 2; j<i; j++) {
            if(i % j === 0) break;
            if(i - 1 === j){
              arr.push(i);
            } 
        }
    }
    console.log(arr);
    return arr.length;
};

console.log(numberOfPrime(10)); // 4