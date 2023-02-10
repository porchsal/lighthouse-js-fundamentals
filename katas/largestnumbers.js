const sumLargestNumbers = function(data) {
  var sum = 0;
  var len = data.length;
    data.sort(sortNumber);

    if (len === 2){
        for (var i = 0; i < len; i++){
		sum += data[i];
        }
        return sum;
    } else {
        return data[len-1] + data[len-2];
    }
 
};

function sortNumber(a, b){
    return a - b;
	};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
