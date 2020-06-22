let JournalEntry = require('./journal.js').JournalEntry;
let moment = require('./moment.js');

$(document).ready(function(){
  $("#journal").submit(function(event){
    event.preventDefault();
    const title = $('input#title').val();
    const date = $('input#date').val();
    const body = $('input#body').val();
    const output = new JournalEntry(title, date, body);

    $('.output').append("<p>" + output.title + "</p><p>" + moment(output.date).format('MMM Do YY') + "</p><p>" + output.body + "</p>");
  });
});
