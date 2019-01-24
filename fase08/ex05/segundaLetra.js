function segundaLetra(array) {
    function comp(a, b) {
        str1 = a.slice(1).toLowerCase();
        str2 = b.slice(1).toLowerCase();
        if (str1 > str2) {
            return 1;
        }
        else if (str1 < str2) {
            return -1;
        }
        return 0;
    }
    array.sort(comp);
    return array;
}