function end(str, target) {
  if (str.substr(-target.length) === target)
    return true;
  else
    return false;
}
console.log(end('Bastian', 'n'));
console.log(end('baby', 'y'));
console.log(end('baller', 'er'));
console.log(end('ballerina', 'erina'));
