function diaDaSemana(str) {
    var dateStr = str.slice(3, 5) + "/" + str.slice(0, 2) + "/" + str.slice(6);
    const weekDays = [
        "Domingo",
        "Segunda-feira",
        "Terca-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sabado"
    ];
    var day = new Date(dateStr);
    return weekDays[day.getDay()];
}