var convert = require('../');
var test = require('tape');

test('preserve precision', function (t) {
    t.plan(1);
    
    var a = 1.0000000000000001e100;
    var b = 1e100;
    var ha = convert(a, 'hex');
    var hb = convert(b, 'hex');
    t.notEqual(a, b);
    t.notEqual(ha, hb);
});
