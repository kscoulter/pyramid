
console.log("hello")
char = prompt("Which character would you like to use?")
numRows = parseInt(prompt("How many rows will be in your pyramid?"));

//subtract 2 until there's only 1
//append to body as p tags
//style p tags with align property

function pyramid() {
  //times to loop
  newChar = "";
  numChar = numRows + 2;//base row 7
  while(numChar > 0){
    var newChar = newChar + char;
    numChar-=2;
    $("body").append("<div align='center'>"+newChar+"</div>")
  }
}

pyramid()
