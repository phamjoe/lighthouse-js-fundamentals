function lastIndexOf(array, value){
  //console.log(array);
  for(var i = array.length; i >= 0; i--){
    //console.log("array:" + array[i] + " array - 1: " + array[i-1]);
    if(array[i] === value){
      return i;
    }
    else if(array.length === 0){
      return -1;
    }
  }
  return -1;
}
console.log(lastIndexOf([ 1 ], 1), "=?", 0);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
