function mutation(arr) {
   var one = arr[0].toLowerCase().split('');
   var two = arr[1].toLowerCase().split('');
   var three = 0;
    for (var s in two){
        if (one.indexOf(two[s]) > -1) {
            three+= 0;
        } else
            three+=1;
        }
    if (three === 0)
        return true;
    else
        return false;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Hello", "hello"]));
console.log(mutation(["alien", "line"]));
