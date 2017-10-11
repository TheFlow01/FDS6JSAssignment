function numPY(s) {
  s = s ? s : '';
  var str = s.toUpperCase();
  var cntP = 0;
  var cntY = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'P') cntP++;
    if (str[i] === 'Y') cntY++;
  }

  return cntP === cntY;
}

console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());

// 정규표현식 사용
function numPY(s) {
  s = s ? s : '';
  var regexpP = /p/gi;
  var regexpY = /y/gi;

  return (s.match(regexpP) ? s.match(regexpP).length : 0) === (s.match(regexpY) ? s.match(regexpY).length : 0)

}
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());