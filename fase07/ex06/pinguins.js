function pinguins(array) {
    for (var pinguim of array) {
        // ReferÍncia
        pinguim.roupa = {
            cabeca: "oculos de sol",
            camisa: "jaqueta polar",
            pes: "tenis"
        };
    }
    return array;
}