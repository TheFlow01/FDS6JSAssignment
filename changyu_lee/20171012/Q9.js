function nextSqaure(n) {
    var x = Math.sqrt(n);

    if(Math.pow(x, 2) === n) {
        return Math.pow((x+1), 2);
    } else {
        return 'no';
    }
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441
