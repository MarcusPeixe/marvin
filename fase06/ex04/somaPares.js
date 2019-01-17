function somaPares(min, max) {
    var sum = 0;
    for (var i = Math.floor(min); i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}