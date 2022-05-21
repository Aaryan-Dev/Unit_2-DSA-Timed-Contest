// You are given a string A of size N. Print all the non empty substrings of the string.

// Note: You have to print the strings in an order such that all the substrings, starting with the first character are printed first, then all the substrings starting with the second character are printed, and so on. Refer the sample I/O for better understanding.

// Note: The string contains only lowercase letters.

// Note : You have to take the input yourself


function string(N, str){
    for(let i=0; i<N; i++){
        let bag = "";
        for(let j=i; j<N; j++){
            bag = bag + str[j];
            console.log(bag);
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;
    
    for(k=0; k<T; k++){
    let N = +input[line];
    line++
    let str = input[line];
    string(N, str);
    line++
    }
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