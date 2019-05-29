var lexi = require('../');
var test = require('tape');

test('max safe integer', function (t) {
    var max = lexi.MAX_SAFE_INTEGER;
    t.is(max, 17592186044667);
    t.is(lexi.unpack(lexi.pack(max)), max);
    t.isNot(lexi.unpack(lexi.pack(max + 1)), max + 1);
    t.end();
});
