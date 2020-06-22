exports.JournalEntry = function(title, date, body) { //establish array elements necessary for journal entry
  this.title = title;
  this.date = date;
  this.body = body;
};

exports.JournalEntry.prototype.wordCount = function() { 
  let string = this.body; //creates string array from body content
  let string_array = string.split(" "); //splits elements into array on occurance of a space
  return string_array.length; //returns the array length, which is the number of word elements in body, which is word count
};
