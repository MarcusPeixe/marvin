function vogalOuConsoante(letra) {
    letra = letra.toLowerCase();
    if (letra < 'a' || letra > 'z') {
        return "Erro";
    }
    else if (
        letra == 'a' ||
        letra == 'e' ||
        letra == 'i' ||
        letra == 'o' ||
        letra == 'u'
    ) {
        return "Vogal";
    }
    else {
        return "Consoante";
    }
}