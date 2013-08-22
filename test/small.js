var convert = require('../');
var test = require('tape');

test('small numbers', function (t) {
    var prev = convert(0);
    for (var n = 1; n < 256*256*16; n ++) {
        var cur = convert(n, 'hex');
        if (cur <= prev) t.fail('cur <= prev');
        prev = cur;
    }
    t.end();
});
