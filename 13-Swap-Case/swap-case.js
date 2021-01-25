var swapCase = function(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var letter = str[i];

    if (letter === letter.toUpperCase()) {
      result += letter.toLowerCase();
    } else {
      result += letter.toUpperCase();
    }
  }

  return result;
};
