var JournalEntry = require('./journal.js').JournalEntry;
var prompt = require('prompt');
prompt.start();

prompt.get(['title', 'date', 'body'], function(err, entry) {
  var journal = new JournalEntry(entry.title, entry.date, entry.body);
  var result = journal.wordCount();
});