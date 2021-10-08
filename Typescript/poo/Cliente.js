var Clientes = /** @class */ (function () {
    function Clientes(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Clientes.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou o " + this.nome + " e tenho " + this.idade + " anos :D ! ";
    };
    return Clientes;
}());
var joao = new Clientes('joao', 25);
var apresentacao = joao.apresentar();
console.log(apresentacao);
