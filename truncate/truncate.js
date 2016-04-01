function truncate(str, num) {
  var trunky = '';
  if (str.length > num) {
    trunky = str.slice(0, num - 3) + '...';
    return trunky;
  }

  return str;
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));
console.log(truncate('the barking dog likes dog food', 27));
console.log(truncate('cats are sociopathic creatures', 31));
console.log(truncate("Absolutely Longer", 2));
