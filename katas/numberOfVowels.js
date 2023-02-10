const numberOfVowels = function(data) {
  const vowels = 'aeiou';
  let sumVowels = 0;
  for (const letter of data){
    if (vowels.includes(letter.toLowerCase())){
	    sumVowels++;
    }
  }
  return sumVowels;




};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
