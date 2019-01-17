function por42(min, max) {
    var i = 0;
    var multiple = 0;
    while (i <= max) {
        if (i >= min)
            multiple++;
        if (multiple == 2)
            return i;
        i += 42;
    }
    console.log("Não encontrado");
    return false;
}

console.log(por42(83, 1500));