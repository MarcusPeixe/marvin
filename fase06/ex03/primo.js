function primo(num) {
    num = Math.abs(num);
    if (num < 2) {
        return "N�o";
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return "N�o";
        }
    }
    return "Sim";
}