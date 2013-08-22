module.exports = function convert (n, enc) {
    n = Math.floor(n);
    
    var bytes;
    var max = 251;
    var x = n - max;
    
    if (n < max) {
        bytes = [ n ];
    }
    else if (x < 256) {
        bytes = [ max, x ];
    }
    else if (x < 256*256) {
        bytes = [ max + 1, Math.floor(x / 256), x % 256 ];
    }
    else if (x < 256*256*256) {
        bytes = [
            max + 2,
            Math.floor(x / 256 / 256),
            Math.floor(x / 256) % 256,
            x % 256
        ];
    }
    else if (x < 256*256*256*256) {
        bytes = [
            max + 3,
            Math.floor(x / 256 / 256 / 256),
            Math.floor(x / 256 / 256) % 256,
            Math.floor(x / 256) % 256,
            x % 256
        ];
    }
    else if (n === Infinity) {
        return undefined;
    }
    else {
        var exp = Math.floor(Math.log(x) / Math.log(2)) - 32;
        bytes = [ 255 ];
        bytes.push.apply(bytes, convert(exp));
        bytes.push.apply(bytes, convert(
            Math.floor(x / Math.pow(2, exp + 1))
        ));
    }
    if (enc === undefined || enc === 'array') return bytes;
    if (enc === 'hex') {
        var s = '';
        for (var i = 0, l = bytes.length; i < l; i++) {
            var b = bytes[i];
            var c = b.toString(16);
            if (b < 16) c = '0' + c;
            s += c;
        }
        return s;
    }
};
