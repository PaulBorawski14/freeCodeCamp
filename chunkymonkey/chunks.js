function chunkArrayInGroups(arr, size) {
var temp = [];
var result = [];

for (var a in arr) {
  if (a % size !== size - 1)
    temp.push(arr[a]);
  else {
    temp.push(arr[a]);
    result.push(temp);
    temp = [];
  }
}

if (temp.length !== 0)
  result.push(temp);
 return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 1));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 4));
console.log(chunkArrayInGroups(["d", "e", "g", "df", "darn", "corn"], 3));
