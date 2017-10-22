function strToInt(str) {
    // return str * 1;
    return parseInt(str);
}

console.log(strToInt('1234'));
console.log(strToInt('-1234'));
console.log(strToInt('123'));

// 강사님 풀이

// function strToInt(str) {
//     //return +str;
//     return Number(str); // 추천하지 않음.
// }

// console.log(strToInt('1234'));
// console.log(strToInt('-1234'));
// console.log(strToInt('123'));