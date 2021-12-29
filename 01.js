const app= new Vue ({
     el: '#app',
     data: {
         titulo: 'hola mundo con vue',
         frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'platano', cantidad: 11}
     ], 
     nuevaFruta: ''

 },
 methods:{
    agregarFruta () {
        //const existe = this.frutas.filter(fruta => fruta.nombre == this.nuevaFruta)
        //if(existe.length == 0){
         this.frutas.push({
            nombre: this.nuevaFruta, 
            cantidad: 0
         })
        // }else{
        //     console.log(`Ya existe una fruta con el nombre ${this.nuevaFruta}`)
        // }
     }
 }
 

})