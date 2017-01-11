/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var dollarAmount = parseFloat(prompt("How much money do you have?", "ex. 42.01")).toFixed(2);
if (isNaN(dollarAmount) === true) {
  alert("Please enter a valid number.");
}
console.log(dollarAmount);


function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var updated_amount = amount * 100;
  console.log(updated_amount);


  var coinPurse = {};

  var quarters1 = 0;
  var dimes1 = 0;
  var nickels1 = 0;
  var pennies1 = 0;

  var remainder;

  remainder = (updated_amount % 25);
  quarters1 = updated_amount - remainder;
  coinPurse.quarters = (quarters1 / 25);
  updated_amount = updated_amount - quarters1;
  console.log(coinPurse.quarters, quarters1);

  remainder = (remainder % 10);
  dimes1 = updated_amount - remainder;
  coinPurse.dimes = (dimes1 / 10);
  updated_amount = updated_amount - dimes1;
  console.log(coinPurse.dimes, dimes1);

  remainder = (remainder % 5);
  nickels1 = updated_amount - remainder;
  coinPurse.nickels = (nickels1 / 5);
  updated_amount = updated_amount - nickels1;
  console.log(coinPurse.nickels, nickels1);

  remainder = (remainder % 1);
  pennies1 = updated_amount - remainder;
  coinPurse.pennies = pennies1;
  console.log(coinPurse.pennies, pennies1);

  console.log(coinPurse);
}

var coins = coinCounter(dollarAmount);
console.log(coins);




