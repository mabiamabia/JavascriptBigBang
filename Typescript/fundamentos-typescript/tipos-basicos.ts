// boolean
let estaPago: boolean = true;

//number
let idade: number =20;
lett valor: number = 29.99;

//string
let empresa: string =  'nomeQualquer';

//Template Strings
let nome: string = 'João';
console.log(`ola meu nome é ${nome} e tenho ${idade} anos`)
let concatenacaoTradicional = 'ola meu nome ' + nome + 'e tenho ' + idade + 'anos'

//arrays
let notas: number[] = [8, 6, 7, 9];

//tuple
let alunos: [string, number, string] = ['joão', 10, 'matematica'];
console.log(alunos[0]);
console.log(alunos[1]);

//Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;

//biblioteca de terceiros
//Migração de Javascript para Typescript...
//outro exemplo: Array com varios tipos de dados

//void
function alerta(): void {
    //...alert('operação não permitida');
}

//null e undefined -> Não faz muito sentido!
let u: undefined = undefined;
let n: null = null;
//null e undefined ão subtipos dos outros tipos

nome = undefined;
nome = null;