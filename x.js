var xs = [];

var prev = convert(0);
for (var n = 1; true; n++) {
    var cur = convert(n);
    if (cur <= prev) break;
    prev = cur;
}
console.log(n - 1);

function convert (n) {
    if (n < 127) {
        return Buffer([ n ]).toString('hex');
    }
    else {
        var b = Math.floor((n - 127) / 256);
        if (n < 192) {
            return Buffer([ 127 + b, (n - 127) % 256 ]).toString('hex');
        }
        
        var c = Math.floor((n - 127) / 256);
        return Buffer([ 127 + b, (n - 127) % 256 ]).toString('hex');
    }
}
