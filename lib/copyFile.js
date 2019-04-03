const fs = require('fs');

fs.readFile('./2_fs.md', 'utf8', (err, data) => {
  if(err) throw err;
  fs.writeFile('2_fs-copy.md', data, 'utf8', err => {
    if(err) throw err;
    console.log('File has been copied!');
  });
});


