class Clientes {
    
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade}anos`;
    }
}

let joao: Clientes = new Clientes('joao', 25);

let apresentacao: string = joao.apresentar();

console.log(apresentacao);