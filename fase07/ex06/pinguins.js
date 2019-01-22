function pinguins(array) {
    for (var pinguim of array) {
        // Referência
        pinguim.roupa = {
            cabeca: "oculos de sol",
            camisa: "jaqueta polar",
            pes: "tenis"
        };
    }
    return array;
}