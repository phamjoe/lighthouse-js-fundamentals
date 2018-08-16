function range(start, end, step){
  var array = [];
  if(start > end || step < 0){
    return array;
  }
  else if(start === null || end === null || step === null){
    return array;
  }
  else{
    for(var i = start; i <= end; i += step){
      array.push(i);
    }
    return array;
  }
}


console.log(range(0, 10, -2));
