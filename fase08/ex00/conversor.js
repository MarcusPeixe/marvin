function conversor(value, from, to) {
    var temp = value;
    if (from == "kelvin") {
        temp = value - 273.15;
    }
    else if (from == "fahrenheit"){
        temp = (value - 32) * 5 / 9;
    }
    if (to == "kelvin") {
        temp = temp + 273.15;
    }
    else if (to == "fahrenheit") {
        temp = temp * 1.8 + 32;
    }
    return Math.ceil(temp);
}