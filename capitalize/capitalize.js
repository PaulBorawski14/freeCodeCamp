function titleCase(str) {
  var lowercase = str.toLowerCase();
  var split = lowercase.split(" ")
  var fullword = [];

  for (var i = 0; i < split.length; i++) {
    var firstLetter = split[i].charAt(0).toUpperCase();
    var reststring = split[i].slice(1);

    fullword[i] = firstLetter + reststring;
  }
 return fullword.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
