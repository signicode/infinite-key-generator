const seq = require("../")();

console.log(seq.next().value); // __!
console.log(seq.next().value); // __"
console.log(seq.next().value); // __#
console.log(seq.next().value); // __$
console.log(seq.next().value); // __%
console.log(seq.next().value); // __&

let i = 0;
for (var key of seq) {
    if (i >= 8900) console.log('>' + key + '<');
    if (i++ > 9000) break;
}

const seq2 = require("../")('--', '0123456789abcdef');

let j = 0;
for (var key of seq2) {
     console.log('>' + key + '<');
    if (j++ > 30) break;
}

// __'
// __(
// __)
// __*
// __+
// __,
// __-
// __.
// __/
// __0
// __1
// __2
