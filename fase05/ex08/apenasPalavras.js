function apenasPalavras(array) {
    var array2 = [];
    for (var element of array) {
        if (typeof element == "string") {
            array2.push(element);
        }
    }
    return array2;
}