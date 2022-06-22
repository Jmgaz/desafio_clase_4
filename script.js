class Rolls{
    constructor(cantidad, ingredientes, precio) {
        this.cantidad = cantidad;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}
const ROLL1= new Rolls(4,"Kani, Ome, Queso", 500);
const ROLL2= new Rolls(4,"Kani, Palta, Queso", 544);
const ROLL3= new Rolls(4,"Kani, Ome, Palta, Queso", 585);
const ROLL4= new Rolls(4,"Sal ahu, Ome, Queso", 997);
const ROLL5= new Rolls(4,"Sal ahu, Palta, Queso", 1041);
const ROLL6= new Rolls(4,"Sal ahu, Ome, Palta, Queso", 1082);
const ROLL7= new Rolls(4,"Langos, Ome, Queso", 704);
const ROLL8= new Rolls(4,"Langos, Palta, Queso", 749);
const ROLL9= new Rolls(4,"Langos, Ome, Palta, Queso", 789);


while(true){
    let opcion = parseInt(prompt("Ingresá el número del roll del cuál quieras averiguar el precio. Para finalizar ingresar el número 10."));
    let costo = 0
    if(opcion == 1){
        costo = ROLL1.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 2){
        costo = ROLL2.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 3){
        costo = ROLL3.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 4){
        costo = ROLL4.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 5){
        costo = ROLL5.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 6){
        costo = ROLL6.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 7){
        costo = ROLL7.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 8){
        costo = ROLL8.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 9){
        costo = ROLL9.precio;
        alert("El roll cuesta: $ " + costo);
    }else if(opcion == 10){
        break;
    }else{
        alert("Opción incorrecta")
    }
    continue
}