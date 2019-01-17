function booleano(array) {
    var array2 = [];
    for (var item of array) {
        if (typeof item !== "boolean") {
            array2.push(item);
        }
    }
    return array2;
}