var convert = require('../');
var test = require('tape');

test('range precision', function (t) {
    t.plan(2);
    var a = 1e55;
    var b = 1.000000000001e55;
    var ha = convert(a, 'hex');
    var hb = convert(b, 'hex');
    t.notEqual(a, b);
    t.notEqual(ha, hb);
});
