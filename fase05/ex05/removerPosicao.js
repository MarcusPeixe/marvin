function removerPosicao(array, index) {
    // Implementa��o mais longa porque sim hihi
    for (var i = index; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    array.pop();
    return array;
}