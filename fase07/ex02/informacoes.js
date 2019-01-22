function informacoes(obj, attr) {
    if (obj[attr] === undefined) {
        return false;
    }
    return obj[attr];
}