function inverter(array) {
    if (typeof array == "string") {
        var str2 = "";
        for (var i = array.length - 1; i >= 0; i--) {
            str2 += array[i];
        }
        return str2;
    }
    else {
        var array2 = [];
        while (array.length > 0) {
            array2.push(array.pop());
        }
        return array2;
    }
}