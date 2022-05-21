// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer

// Note : You have to take the input yourself

function missing(input){
    for(i=1; i<=input.length; i++){
        let count = 0;
        for(j=0; j<input.length; j++){
            if(i == input[j]){
                count++
            }
        }
            if(count==0){
                console.log(i);
            }
    }
}

function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    missing(input);
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