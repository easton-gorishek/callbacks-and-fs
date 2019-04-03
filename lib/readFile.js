const fs = require('fs');

fs.readFile('./2_fs.md', 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

