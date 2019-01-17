function x(str) {
    count = 0;
    for (var char of str) {
        if (char.toLowerCase() == 'x') {
            count++;
        }
    }
    return count;
}