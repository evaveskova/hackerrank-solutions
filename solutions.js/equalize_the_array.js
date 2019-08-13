'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Start of solution
function equalizeArray(arr) {
let final = []

  for (let i = 0; i < arr.length; i++){
    let temp = []
      for (let j = 0; j < arr.length; j++){
        if (arr[i] === arr[j]) {
          temp.push(arr[j])
        }
      }
        final.push(temp)
    }
    let optimalArr = final.sort((a, b) => {
      return a.length - b.length})[final.length - 1]
      return arr.length - optimalArr.length
}
// End of solution

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
