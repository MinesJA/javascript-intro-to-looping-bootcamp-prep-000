
function forLoop(array){

for (let i = 1; i < 26; i++){
  if(i === 1){
    array.push("I am 1 strange loop.");
  }
  else {
    array.push(`I am ${i} strange loops.`);
  }
}
  return array;
}

function whileLoop(number){

  while (number > 0){
    console.log(number);
    number = number - 1;
  }

  if(number === 0){
    return "done";
  }
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array.pop();
} while (array.length > 0 && maybeTrue());

  return array;
}
