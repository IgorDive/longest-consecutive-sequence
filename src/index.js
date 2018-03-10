module.exports = function longestConsecutiveLength(array) {
  let lengthsArr = [];
  
  if ( !array.length ) return 0;

  array.sort( (a, b) => a - b ).filter( (elem, i) => elem !== array[i + 1] && true ).reduce( (prevValue, item, j, arr) => {
    if ( item === arr[j + 1] - 1 ) return ++prevValue;
    lengthsArr.push(prevValue);
    
    return 1;
  }, 1 );

  return lengthsArr.sort( (a, b) => b - a )[0];
};