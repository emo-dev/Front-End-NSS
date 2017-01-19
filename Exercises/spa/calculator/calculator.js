var input1 = parseInt(document.getElementById("input1"));
var input2 = parseInt(document.getElementById("input2"));

var added = document.getElementById("add1");
var subtracted = document.getElementById("subtract1");
var divided = document.getElementById("divide1");
var multiplied = document.getElementById("multiply1");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyFunction(x, y) {
  multiplied.innerHTML = x * y;
  return (x + y);
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addFunction(x, y) {
  added.innerHTML = x + y;
  return (x * y);
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function subtractFunction(x, y) {
  subtracted.innerHTML = x - y;
  return (x - y);
 }


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 function divideFunction(x, y) {
  divided.innerHTML = x / y;
  return(x / y);
 }



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function someMath(x, y, someFunction) {
  return someFunction(x, y);
}










