function truncate(str, num) {

  if (str.length > num){
    str = str.slice(0, num - 3);
    str += "...";
  }
  return str;
}
console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));
console.log(truncate('the barking dog likes dog food', 27));
console.log(truncate('cats are sociopathic creatures', 31));
console.log(truncate('barn cat darn cat knocking over lamps', 14));  
