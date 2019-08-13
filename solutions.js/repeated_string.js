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

//Start of solution
function repeatedString(s, n) {
let stringCount = Math.floor(n / s.length);
let count = (s.split("a").length - 1) * stringCount;
let remaining = n % s.length;

  for (let i = 0; i < remaining; i++) {
    if (s.charAt(i) === "a") {
      count++;
    }
  }
  return count;
}
// End of solution

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
