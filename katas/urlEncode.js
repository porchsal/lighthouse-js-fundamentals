const urlEncode = function(text) {
  var encodedStr = "";

    for (var i = 0; i < text.length; i ++){
        if (text[i] == " "){
            encodedStr += "%20";
        } else {
            encodedStr += text[i];
        }
    }
    return encodedStr;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
