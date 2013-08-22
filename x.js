var convert = require('./');

var prev = convert(0);
var skip = 1;
for (var n = 1; n < Number.MAX_VALUE; n += skip) {
    var cur = convert(n, 'hex');
    if (cur <= prev) break;
    prev = cur;
    console.log(n, cur);
    if (n > 256*256) {
        skip = 1 + Math.pow(245, Math.ceil(Math.log(n) / Math.log(256)));
    }
}
console.log(n - 1);
