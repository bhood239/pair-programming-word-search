// Pair Programming completed by: @bhood239 @vyshudoulagar @JordyNtambwe

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
    
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let l = 0; l < horizontalJoin.length; l++) {
    let rl = horizontalJoin[l].split('').reverse().join('');
    if (rl.includes(word)) {
      return true;
    }
  }

  for (let l = 0; l < verticalJoin.length; l++) {
    let rl = verticalJoin[l].split('').reverse().join('');
    if (rl.includes(word)) {
      return true;
    }
  }

  return false;
};

const transpose = function(matrix) {
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
};

module.exports = wordSearch;