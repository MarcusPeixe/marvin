function segundo(array) {
    for (var i = array.length; i > 1; i--) {
        array[i] = array[i - 1];
    }
    array[1] = "Marvin";
    return array;
}