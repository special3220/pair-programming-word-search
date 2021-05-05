const transform = function(arr) {
    let tempRowArr = [];
    let tempColArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (const row of arr) {
        tempRowArr.push(row[i]);
      }
      tempColArr.push(tempRowArr);
      tempRowArr = [];
    }
    return tempColArr;
  };
  
  const wordSearch = (letters, word) => {
    if (!letters.length) {
      return undefined;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transformedArr = transform(letters);
    const verticallJoin = transformedArr.map(ls => ls.join(''));
  
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    for (const l of verticallJoin) {
      if (l.includes(word)) return true;
    }
  
    return false;
  };
  
  module.exports = wordSearch;
  