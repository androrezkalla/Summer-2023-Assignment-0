function titleCaseEdit(title) {
  var phrase = title.split(" ");
  for (var i = 0; i < phrase.length; i++) {
    phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1);
  }
  return phrase.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;