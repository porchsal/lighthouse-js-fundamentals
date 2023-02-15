const repeatNumbers = function(data) {
  var output = "";
  for (var i= 0; i < data.length; i++){
    var toStr = data[i][0].toString();
    output += toStr.repeat(data[i][1]) + ",";
  }
  return output.substring(0, output.length);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 3]]));
