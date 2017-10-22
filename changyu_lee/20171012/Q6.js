function hideNumbers(str) {
    var stars = '';
    for (var i = 0; i<str.length-4; i++) {
        stars += '*';
    }
    return stars + str.substring(str.length - 4);
}

console.log(hideNumbers('01011111111'));
console.log(hideNumbers('0311111111'));