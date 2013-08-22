# lexicographic-integer

create lexicographic string keys for positive integers without zero-padding

Note: there is some loss of precision for very large values (> 2^32)

# example

``` js
var convert = require('lexicographic-integer');
console.log(convert(12345));
```

output:

```
[ 252, 47, 62 ]
```

## hex list

``` js
var convert = require('lexicographic-integer');

for (var n = 0; n < 5; n++) {
    console.log(n, convert(n, 'hex'));
}

console.log('...');

for (var n = 248; n < 257; n++) {
    console.log(n, convert(n, 'hex'));
}

console.log('...');

for (var n = 5000; n < 5005; n++) {
    console.log(n, convert(n, 'hex'));
}

console.log('...');

for (var n = 21378213; n < Number.MAX_VALUE; n *= 1513254198219212) {
    console.log(n, convert(n, 'hex'));
}
```

output:

```
0 '00'
1 '01'
2 '02'
3 '03'
4 '04'
...
248 'f8'
249 'f9'
250 'fa'
251 'fb00'
252 'fb01'
253 'fb02'
254 'fb03'
255 'fb04'
256 'fb05'
...
5000 'fc128d'
5001 'fc128e'
5002 'fc128f'
5003 'fc1290'
5004 'fc1291'
...
21378213 'fe014633aa'
3.2350670572674536e+22 'ff2afedb3776c0'
4.895478805930646e+37 'ff5dfe935164a0'
7.408103855367726e+52 'ff8ffec6004cb6'
1.121034425997914e+68 'ffc2fe850f8af8'
1.696410051489608e+83 'fff4feb2d6c188'
2.5670996323179187e+98 'fffb2bfef05dd80e'
3.884674295852086e+113 'fffb5efea187f6ca'
5.87849968691243e+128 'fffb90fed91aaefe'
8.895664330450558e+143 'fffbc3fe91e5fa5b'
1.3461401394003201e+159 'fffbf5fec417daf6'
2.03705221733893e+174 'fffc0128fe83c74c6d'
3.08257781987989e+189 'fffc015afeb11d9526'
4.6647238272706696e+204 'fffc018cfeee0ce3b1'
7.058912915150531e+219 'fffc01bffe9ff97c9f'
1.0681929603715358e+235 'fffc01f1fed7031d45'
1.6164474817904348e+250 'fffc0224fe907e1097'
2.4460959380202488e+265 'fffc0256fec2341e25'
3.701564947456103e+280 'fffc0289fe828237a0'
5.601408696719025e+295 'fffc02bbfeaf68a916'
```

# methods

``` js
var convert = require('lexicographic-integer')
```

## convert(n, encoding='array')

If `encoding` is `undefined` or `'array'`, return an array of byte values
between 0 and 255, inclusive for the integer `n`.

If `encoding` is `'hex'`, return a lexicographic hex string for the integer `n`.

# install

With [npm](https://npmjs.org) do:

```
npm install lexicographic-number
```

# license

MIT
