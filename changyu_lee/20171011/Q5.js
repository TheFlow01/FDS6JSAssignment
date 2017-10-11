function toWeirdCase(s) {
  var result = [];
  var str = s.split(' ');
  for (var i = 0; i < str.length; i++) {
    var arr = [];
    for (var j = 0; j < str[i].split('').length; j++) {
      (j % 2) ? arr.push(str[i].split('')[j]): arr.push(str[i].split('')[j].toUpperCase());
    }
    result.push(arr.join(''));
  }
  return result.join(' ');
}

console.log(toWeirdCase('hello world'));
console.log(toWeirdCase('my name is lee'));