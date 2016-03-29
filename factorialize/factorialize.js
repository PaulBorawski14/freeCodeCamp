function factorialize(num) {
 var numba = 1;
  for (i = 1; i <= num; i++) {
    numba = numba * i;
  }
  return numba;
}
console.log(factorialize(5));
console.log(factorialize(510));
console.log(factorialize(20));
console.log(factorialize(80));

//510 produces result of infinity?
