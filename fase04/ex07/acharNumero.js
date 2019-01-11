function acharNumero(num) {
    if (num < 5) {
        return 'a';
    }
    if (num <= 10) {
        return 'b';
    }
    if (num <= 100) {
        return 'c';
    }
    return 'd';
}