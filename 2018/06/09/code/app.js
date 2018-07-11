let numbers_arr = [15,2,23,4,75,6,76,48,39,110];

function highestNumber( arr, index ){

  let sortedNum_arr = arr.sort( (a, b) => {
    return b - a;
  });

  //let reversed_arr = sortedNum_arr.reverse();
  return sortedNum_arr[index-1];
}

console.log( highestNumber(numbers_arr, 3) );