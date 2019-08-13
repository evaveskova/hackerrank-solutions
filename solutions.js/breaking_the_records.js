'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Start of solution
function breakingRecords(scores) {
    var high = scores[0];
    var low = scores[0];
    var highBroken = 0;
    var lowBroken = 0;

    for (var i = 1; scores.length > i; i++) {
        if (scores[i] > high) {
            highBroken++;
            high = scores[i];
        } else if (scores[i] < low) {
          lowBroken++;
          low = scores[i];
      }
    }
    return [highBroken, lowBroken]
}
// End of solution

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
