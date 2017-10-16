var isHarShad = function(n) {
    var str = n + '';
    var arr = str.split('');
    var num = parseInt(arr[0]) + parseInt(arr[1]);
    if (n % num === 0) {
        return true;
    } 
    return false; 
};

console.log(isHarShad(11));
console.log(isHarShad(12));
console.log(isHarShad(18));
