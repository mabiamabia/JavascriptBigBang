function dizerOi(nome) {
  console.log("Olá!" + nome);
}

var dizerOla = function (nome) {
  console.log("Olá" + nome);
};

/* dizerOi("Jon ");
dizerOi("Rob ");
 */

/* dizerOla("Bran") */

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("Rickon");
