function animais(array) {
    var idade = 5;
    for (var animal of array) {
        delete animal.altura;
        animal.idade = idade++;
    }
    return array;
}