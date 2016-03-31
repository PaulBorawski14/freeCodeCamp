function repeatStringNumTimes(str, num) {
  var strang = "";
  while (num > 0) {
    strang += str;
    num--;
  }
  return strang;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("hello", 15));
console.log(repeatStringNumTimes("bran", 7));
console.log(repeatStringNumTimes("darn", 5));
