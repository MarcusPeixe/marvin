function pessoaFisica(cpf) {
    const format = "###.###.###-##";
    if (cpf.length != format.length) {
        return false;
    }
    for (var i in cpf) {
        if (format[i] == '#') {
            if (cpf[i] < '0' || cpf[i] > '9') {
                return false;
            }
        }
        else if (format[i] != cpf[i]){
            return false;
        }
    }
    return true;
}