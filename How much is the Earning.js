// Noddy choosed a city for Advertising his company's product. There areSstreets in that city. Each day he travels one street. There areNbuildings in a street which are located at points 1,2,3....N(respectively). Each building has some height(Say h meters).

// Noddy stands at point 0. His height is 0.5m. Now he starts communicating with the people of each building. He can communicate with people of a particular building only if he can see that building. If he succeed to communicate with any particular building then his boss gives him R rupees. i.e. if he communicates with K buildings in a day, then he will earn K times R rupees. Now Noddy wants to know his maximum Earning for each day.

// Note: All the points are on Strainght Line and Noddy is always standing at point 0.

// Note : You have to take the input yourself




//***Hint use do while loop and N = arr.indexOf(max);***

function runProgram(input) {
    // write your code here
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}