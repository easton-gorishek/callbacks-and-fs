const copy = require('../lib/copy.js');
const { readFile } = require('fs');

describe('copy function using file system', () => {
  it('reads and copies a file to specified path', done => {

    copy('./writing.txt', './test/writing-copy.txt', err => {
      expect(err).toBeFalsy();

      readFile('./test/writing-copy.txt', { encoding: 'utf8' }, (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toBe('I am writing!');
        done();
      });
    });
  });
});
