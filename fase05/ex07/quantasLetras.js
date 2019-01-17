function quantasLetras(array) {
    var sum = 0;
    for (var str of array) {
        sum += str.length;
    }
    return sum;
}