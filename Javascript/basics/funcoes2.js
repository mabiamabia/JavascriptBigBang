function dizerOi(nome) {
  console.log(this);
  console.log("oi, " + nome);
}

dizerOi("Arya");

dizerOi.call(null, "Arya");

dizerOi.apply(null, ["Arya"]);
