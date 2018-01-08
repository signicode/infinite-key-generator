
module.exports = function* getSeq(keyPrefix, alphabet = '') {

    let id = [];
    keyPrefix = keyPrefix || "__";

    if (!alphabet) {
        for (let i = 32; i < 126; i++) {
            alphabet += String.fromCharCode(i + 1);
        }
    }

    let chars = [];
    while (true) {
        for(let i = 0; i < chars.length + 1; i++) {
            if (i === chars.length) {
                id.unshift(alphabet[0]);
                chars.push(0);
                break;
            }

            if (chars[i] < alphabet.length - 1) {
                id[id.length - 1 - i] = alphabet[++chars[i]];
                break;
            }

            chars[i] = 0;
            id[id.length - 1 - i] = alphabet[chars[i]];
        }
        yield keyPrefix + id.join('');
    }

};
