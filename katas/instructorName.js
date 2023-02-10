const instructorWithLongestName = function(instructors) {
  var longest = "";
  var result;

  for (var i = 0; i < instructors.length; i++){
      for (var j = 0; j < instructors.length; j++){
	  if(instructors[i].name.lenght > instructors[j].name.length && instructors[i] > longest.length){
	    longest = instructors[i].name;
	    result = instructors[i];
	  }else if(instructors[j].name.length > instructors[i].name.length && instructors[j].name.length > longest.length){
            longest = instructors[j].name;
	    result = instructors[j];
	  }
      }
  }
  return result;
     	
  





};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
