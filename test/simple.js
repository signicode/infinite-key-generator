const seq = require("../")();

console.log(seq.next().value); // __!
console.log(seq.next().value); // __"
console.log(seq.next().value); // __#
console.log(seq.next().value); // __$
console.log(seq.next().value); // __%
console.log(seq.next().value); // __&

let i = 0;
for (var key of seq) {
    console.log(key);
    if (i++ > 10) break;
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
