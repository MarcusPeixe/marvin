function passadoOuFuturo(date) {
    var present = new Date("21 October 2015");
    if (date < present) {
        return "Passado";
    }
    else {
        return "Futuro";
    }
}
