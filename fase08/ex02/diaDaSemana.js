function diaDaSemana(str) {
    var dateStr = str.slice(3, 5) + "/" + str.slice(0, 2) + "/" + str.slice(6);
    const weekDays = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];
    var day = new Date(dateStr);
    return weekDays[day.getDay()];
}