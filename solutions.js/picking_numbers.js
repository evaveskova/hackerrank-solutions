'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Start of solution
function pickingNumbers(a) {
let sort = a.sort();
let count = 0;
let res = 0;

  for (let i = 0; i < sort.length; i ++){
    for (let j = 0; j < sort.length; j++){
      if (sort[i] == sort[j] || sort[i] == sort[j] - 1) {
        count += 1;
      }
    }
      if (count > res) {
        res = count;
        }
        count = 0;
    }
    return res;
}
// End of solution


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
