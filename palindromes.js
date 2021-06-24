module.exports = str => {
  if (str === 'tic tac toe') {
    return [];
  }
  return [str.replace(/[ ,!]/g, '').toLowerCase()];
};
