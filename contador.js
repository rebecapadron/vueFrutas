const test = {
    prop: 42,
    func: function() {
        let prop = 40;
      return this.prop;
    },
  };
  
  console.log(test.func());
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// for(let num of numeros){
//     console.log(num);
// }

// numeros.forEach(function(numero){
//     console.log(numero);
// })