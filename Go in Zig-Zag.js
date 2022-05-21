// Given amatrixwithNrows andMcolumns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// Image

// For example, for the above matrix, the required output would be as shown below.

// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2.

// Note : This is a function complete problem
// You just have to complete the function and print the required output


function goInZigZag(N, M, matrix){
    let bag = "";
for(i=0; i<N; i++){
    if(i%2===0){
    for(j=M-1; j>=0; j--){
        bag = bag + matrix[i][j]+" ";
    }
    }else{
    for(j=0; j<M; j++){
        bag = bag + matrix[i][j]+" ";
    }
    }
}
    console.log(bag);
}
