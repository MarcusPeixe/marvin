function por42(min, max) {
    var i = Math.floor(min / 42) * 42;
    var multiple = 0;
    while (i <= max) {
        if (i >= min)
            multiple++;
        if (multiple == 2)
            return i;
        i += 42;
    }
    console.log("N�o encontrado");
    return false;
}