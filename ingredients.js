const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var len = ingredients.length;
var i = 0;
while (i <= len -1){
	console.log(ingredients[i]);
	i++;
}

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i <= len -1; i++){
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Array backwards");
for (var j = len - 1; j >= 0; j-- ){
	console.log(ingredients[j]);
}




