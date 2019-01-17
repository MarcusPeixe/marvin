function primo(num) {
    if (num < 3) {
        return "Sim";
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return "Não";
        }
    }
    return "Sim";
}