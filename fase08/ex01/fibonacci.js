function fibonacci(num) {
    if (num == 1) {
        return [1];
    }
    var array = [1, 1];
    while (array.length < num) {
        len = array.length;
        array.push(array[len - 1] + array[len - 2]);
    }
    return array;
}