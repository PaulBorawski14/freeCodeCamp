var count = 0;

function cc(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count += 1;
    break;
  case 7:
  case 8:
  case 9:
    count += 0;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count -= 1;
    break;
}

  return count + (count > 0 ? " Bet" : " Hold");
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2) + cc(3));
console.log(cc("A"));
console.log(cc("K"));
console.log(cc(7));
console.log(cc(4));
console.log(cc("J"));
console.log(cc(9));
