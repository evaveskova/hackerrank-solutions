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
function encryption(s) {
 let sLength = s.length
 let numberOfRows = Math.floor(Math.sqrt(sLength))
 let numberOfCols = Math.ceil(Math.sqrt(sLength))

 while (numberOfRows * numberOfCols < sLength) {
   numberOfRows++
 }
 let output = ''
 for (let i = 0; i < numberOfCols; i++) {
   for (let j = 0; j < numberOfRows; j++) {
     let letter = s[i + j * numberOfCols]
     output += letter != null ? letter : ''
   }
   output += ' '
 }
 return output
}
// End of solution

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
