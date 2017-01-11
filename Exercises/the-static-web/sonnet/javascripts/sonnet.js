console.log("Link successful.");
console.log("-");

//grabbing sonnet from html element
var sonnet = document.getElementById("sonnet").innerHTML;

//getting index of "orphans" and logging len
//of sonnet
var orphans = sonnet.indexOf("orphans");
console.log("Orphans index in sonnet: ", orphans);
console.log("Length of sonnet: ", sonnet.length);

//replacing "the " with "a large"
var aLarge = sonnet.replace(/the /g, 'a large');
//replacing the first "winter" with "yuletide"
var yuletide = aLarge.replace(/winter/, 'yuletide');

//updating html element
document.getElementById("sonnet").innerHTML = yuletide;
console.log("Length of updated sonnet: ", yuletide.length);