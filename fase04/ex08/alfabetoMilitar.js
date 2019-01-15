function alfabetoMilitar(letra) {
    letra = letra.toLowerCase();
    if (letra == 'a') {
        return "alpha";
    }
    if (letra == 'e') {
        return "echo";
    }
    if (letra == 'i') {
        return "india";
    }
    if (letra == 'o') {
        return "oscar";
    }
    if (letra == 'u') {
        return "uniform"
    }
    return false;
}
