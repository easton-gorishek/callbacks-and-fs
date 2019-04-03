const fs = require('fs');

fs.writeFile('writing.txt', 'I am writing!', { encoding: 'utf8' }, (err) => {
  if(err) throw err;
  console.log('File has been saved!');
});
