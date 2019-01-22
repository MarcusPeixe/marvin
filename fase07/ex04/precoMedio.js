function precoMedio() {
    var sum = 0;
    var maisCaro = arguments[0];
    for (var produto of arguments) {
        if (maisCaro.preco < produto.preco) {
            maisCaro = produto;
        }
        sum += produto.preco;
    }
    console.log("O produto mais caro se chama \"" + maisCaro.nome + "\"");
    return sum / arguments.length;
}