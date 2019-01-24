function bordas(w, h) {
    var str = "";
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            var b0 = x === 0;
            var b1 = x == w - 1;
            var b2 = y === 0;
            var b3 = y == h - 1;
            if (!(b0 || b1 || b2 || b3)) {
                str += "0";
            }
            else if ((b0 || b1) ^ (b2 || b3)) {
                str += "B";
            }
            else if (b0 ^ b2) {
                str += "C";
            }
            else {
                str += "A";
            }
        }
        if (y < h - 1) {
            str += "\n";
        }
    }
    console.log(str);
}