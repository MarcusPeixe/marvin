function primo(num) {
    num = Math.abs(num);
    if (num < 2) {
        return "Não";
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return "Não";
        }
    }
    return "Sim";
}