var reverse = function(str) {
  var result = "";

  for (var i = str.length - 1; i >= 0; i--) {
    var letter = str[i];
    result += letter;
  }
  
  return result;
};
