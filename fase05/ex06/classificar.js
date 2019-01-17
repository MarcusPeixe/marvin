function classificar(array) {
    //Muito simples:
    //return array.sort();
    
    //Bubble sort:
    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                var swapBuffer = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swapBuffer;
            }
        }
    }
    return array;
}