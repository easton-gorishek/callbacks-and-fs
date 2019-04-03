const wait = require('../lib/wait.js');

describe('wait function', () => {
  it('fires a callback after a few seconds', done => {
    expect(wait(2000, () => {
      console.log('callback was fired');
      done();
    }));
  });
});
