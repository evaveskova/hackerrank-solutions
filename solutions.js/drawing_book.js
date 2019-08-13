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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Start of solution
function pageCount(n, p) {
let pages = 0;
let difference;

   const diff = (n, p) => {
       let long = n - p
       if (p > long) {
           difference = true
       } else {
           difference = false
       }
   }

   diff(n, p)

   if (difference == false) {
    for (let i = 1; i < n; i += 2) {
      if (i >= p) {
        break
           }
      pages++
       }
      } else {
          if (n - p == 1 && n % 2 == 0) {
           for (let i = n; i > 0; i -= 2) {
             if (i <= p) {
          break
          }
          pages++
           }
        } else {
          for (let i = n - 1; i > 0; i -= 2) {
            if (i <= p) {
            break
               }
            pages++
           }
       }
   }
   return pages
}
// End of solution

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
