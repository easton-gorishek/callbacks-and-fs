module.exports = function wait(time, callback) {
  return setTimeout(callback, time);
};
