(function () {
  var escopoLocal, escopoGlobal, foo, obj, array;

  escopoLocal = "foo";
  escopoGlobal = "teste";

  console.log(escopoLocal);
  console.log(escopoGlobal);

  obj = {
    foo: "bar",
    bar: "foo",
    foobar: "oi",
  };

  array = [1, 2, 3];
  console.log(array); 
})();
