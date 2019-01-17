function inverter(array) {
    var array2 = [];
    while (array.length > 0) {
        array2.push(array.pop());
    }
    return array2;
}