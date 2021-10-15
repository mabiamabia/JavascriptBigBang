var tick = (function () {
  var contador = 1;

  return function () {
    contador = contador + 1;
    console.log(contador);
  };
})();
