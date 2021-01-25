var longestWord = function(str) {
  var words = str.split(" ");
  var longestWord = words[0];

  for (var i = 1; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
};
