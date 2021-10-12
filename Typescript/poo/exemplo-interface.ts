interface Pessoa {
    idade: number;
    sexo?: string;
}

function imprimirIdade(pessoa: { idade: number}){
    console.log(pessoa.idade);
}

let joaoMarcos = {
    nome: 'João Marcos', 
    idade: 22
};

imprimirIdade(joaoMarcos);
