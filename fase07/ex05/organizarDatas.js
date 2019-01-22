function organizarDatas(array) {
    function comp(p1, p2) {
        return new Date(p1.dataDeChegada) - new Date(p2.dataDeChegada);
    }
    array.sort(comp);
    return array;
}