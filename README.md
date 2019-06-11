Infinite Key Generator
========================

Creates a sequence of strings that can be compared by &gt; and &lt; operators (and therefore sort). The sequence never
ends (doesn't overflow like a number at 2^52) and the memory footprint scales logarithimcally.

How it works
--------------

Well it returns a generator that's yields a sequence of keys of all printable ASCII 7-bit character set and uses that
set as digits.

Install dependency from npm

    npm install infinite-sequence-generator

Then use it in the code as you like it:

```javascript
    const fini = require("infinite-sequence-generator");

    const seq = fini();
    seq.next().value;   // __!

    // or maybe as an iterator

    let i = 0;
    for (var key of seq) {
        console.log(key);
        if (i++ > 10) break;
    }
```

You may add a sequence prefix if you like.

```javascript
    const seq = fini("AAA__");

    console.log(seq.next().value); // AAA__!
```

You can add your own alphabet:

```javascript
    const seq = fini("-prefix-", '0123456789abcdef');

    console.log(seq.next().value); // AAA__!
```


License and contributions
---------------------------

MIT Licensed, see LICENSE file.
