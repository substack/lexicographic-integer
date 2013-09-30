var convert = require('../');
var test = require('tape');

test('unpack', function (t) {
    var skip = 1;
    for (var n = 1; n < Number.MAX_VALUE; n += skip) {
        var cur = convert(n);
        compare(n, convert.unpack(cur));
        skip = 1 + Math.pow(245, Math.ceil(Math.log(n) / Math.log(256)));
    }
    t.equal(n, Infinity);
    t.end();
    
    function compare () {
        t.equal(round(n), round(convert.unpack(cur)));
    }
    
    function round (n) {
        var x = Math.log(n) / Math.log(10);
        return Math.round(n * n / Math.pow(10, x - 8));
    }
});
