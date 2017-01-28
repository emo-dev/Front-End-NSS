/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
*/
var multiply = function(a,b) {
    document.getElementById("multiply1").innerHTML = a * b;
};


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
*/
var add = function(a,b) {
    document.getElementById("add1").innerHTML = a + b;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
*/
var subtract = function(a,b) {
    document.getElementById("subtract1").innerHTML = a - b;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
*/
var divide = function(a,b) {
    document.getElementById("divide1").innerHTML = a / b;
};


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
*/
var mathematics = function(a, b, aFunction) {
  aFunction(a,b);
};


//single function that is an eventListener over the entire body
function determineEquation() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  if (event.target.type === "button") {
    if (input1 === undefined || input2 === undefined) {
      alert("You must enter a number");
    } else {
      switch (event.target.innerHTML.toLowerCase()) {
        case "add":
          mathematics(input1, input2, add);
          break;
        case "subtract": 
          mathematics(input1, input2, subtract);
          break;
        case "multiply": 
          mathematics(input1, input2, multiply);
          break;
        case "divide":
          mathematics(input1, input2, divide);
          break;
        };
      };
  };
};











