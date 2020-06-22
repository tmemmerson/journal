let JournalEntry = require('./journal.js').JournalEntry;
let prompt = require('prompt');
prompt.start();

prompt.get(['title', 'date', 'body'], function(err, entry) {
  const journal = new JournalEntry(entry.title, entry.date, entry.body);
  const result = journal.wordCount();
});