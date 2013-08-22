var xs = [];

var prev = convert(0);
for (var n = 1; true; n++) {
    var cur = convert(n);
    if (cur <= prev) break;
    prev = cur;
}
console.log(n - 1);

function convert (n) {
    var bytes;
    var x = n - 252;
    if (n < 252) {
        bytes = [ n ];
    }
    else if (x < 256) {
        bytes = [ 252, x ];
    }
    else if (x < 256*256) {
        bytes = [ 253, Math.floor(x / 256), x % 256 ];
    }
    else if (x < 256*256*256) {
        bytes = [
            254,
            Math.floor(x / 256 / 256),
            Math.floor(x / 256) % 256,
            x % 256
        ];
    }
    else if (x < 256*256*256*256) {
        bytes = [
            255,
            Math.floor(x / 256 / 256 / 256),
            Math.floor(x / 256 / 256) % 256,
            Math.floor(x / 256) % 256,
            x % 256
        ];
    }
    return Buffer(bytes).toString('hex');
}
