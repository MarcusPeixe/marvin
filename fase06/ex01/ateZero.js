function ateZero(boundary) {
    var min = Math.min(0, boundary);
    var max = Math.max(0, boundary);
    var array = [];
    for (var i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}