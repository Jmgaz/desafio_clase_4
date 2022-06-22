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
    let opcion = parseInt(prompt("Ingresá un número del 1 al 9 para conocer nuestros rolls y sus precios. Para finalizar ingresá el número 10."));
    let costo = 0
    if(opcion == 1){
        costo = ROLL1.precio;
        alert("Las " + ROLL1.cantidad + " piezas de " + ROLL1.ingredientes + " cuestan: $ " + costo / 2 );
    }else if(opcion == 2){
        costo = ROLL2.precio;
        alert("Las " + ROLL2.cantidad + " piezas de " + ROLL2.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 3){
        costo = ROLL3.precio;
        alert("Las " + ROLL3.cantidad + " piezas de " + ROLL3.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 4){
        costo = ROLL4.precio;
        alert("Las " + ROLL4.cantidad + " piezas de " + ROLL4.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 5){
        costo = ROLL5.precio;
        alert("Las " + ROLL5.cantidad + " piezas de " + ROLL5.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 6){
        costo = ROLL6.precio;
        alert("Las " + ROLL6.cantidad + " piezas de " + ROLL6.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 7){
        costo = ROLL7.precio;
        alert("Las " + ROLL7.cantidad + " piezas de " + ROLL7.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 8){
        costo = ROLL8.precio;
        alert("Las " + ROLL8.cantidad + " piezas de " + ROLL8.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 9){
        costo = ROLL9.precio;
        alert("Las " + ROLL9.cantidad + " piezas de " + ROLL9.ingredientes + " cuestan: $ " + costo / 2)
    }else if(opcion == 10){
        break;
    }else{
        alert("Opción incorrecta")
    }
    continue
}