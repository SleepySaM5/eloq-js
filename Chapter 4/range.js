function range (start, end, step) {
	var array = [];
	
  if(start < end) {
  	for(var i = start; i<=end; i += step) {
		array.push(i);
    }
  	console.log(array); 
    }
  else if(start > end) {
	for(var i = start; i>=end; i += step) {
		array.push(i);
    }
  	console.log(array); 
    }
}
console.log(range(5, 2, -1));

function sum(start, end){
  var array = [], count = 0;
  for(i = start; i <= end; i++){
  	array = i;
    count = count + array;
  }
  console.log(count);
}
console.log(sum(3,5));

// reverse array
function reverseArray(start, end){
  array = [];
  for(var i = end; i >= start; i--){
    array.push(i);
  }
  console.log(array);
}
console.log(reverseArray(1, 4));