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

const arrayRolls= []

arrayRolls.push(ROLL1)
arrayRolls.push(ROLL2)
arrayRolls.push(ROLL3)
arrayRolls.push(ROLL4)
arrayRolls.push(ROLL5)
arrayRolls.push(ROLL6)
arrayRolls.push(ROLL7)
arrayRolls.push(ROLL8)
arrayRolls.push(ROLL9)

class Combos{
    constructor(rolls, precio) {
        this.rolls = rolls;
        this.precio = precio;
    }
}

const COMBO10= new Combos( ROLL1.cantidad + " piezas de " + ROLL1.ingredientes + " - " + ROLL8.cantidad + " piezas de " + ROLL8.ingredientes + " - " + "2 Nigiris de salmón ahumado.", 1000);
const COMBO15= new Combos( ROLL1.cantidad + " piezas de " + ROLL1.ingredientes + " - " + ROLL8.cantidad + " piezas de " + ROLL8.ingredientes + " - " + ROLL4.cantidad + " piezas de " + ROLL4.ingredientes + " - " +  "3 Nigiris de salmón ahumado.", 1500);
const COMBO20= new Combos( ROLL1.cantidad + " piezas de " + ROLL1.ingredientes + " - " + ROLL8.cantidad + " piezas de " + ROLL8.ingredientes + " - " + ROLL4.cantidad + " piezas de " + ROLL4.ingredientes + " - " + ROLL3.cantidad + " piezas de " + ROLL3.ingredientes + " - " +  "4 Nigiris de salmón ahumado.", 2000);
const COMBO30= new Combos( ROLL1.cantidad + " " + ROLL1.ingredientes + " - " + ROLL8.cantidad + " piezas de " + ROLL8.ingredientes + " - " + ROLL4.cantidad + " piezas de " + ROLL4.ingredientes + " - " + ROLL3.cantidad + " piezas de " + ROLL3.ingredientes + " - " + ROLL9.cantidad + " piezas de " + ROLL9.ingredientes + " - " + ROLL5.cantidad + " piezas de " + ROLL5.ingredientes + " - " + "6 Nigiris de salmón ahumado.", 3000);
const COMBO40= new Combos(ROLL1.cantidad*2 + " piezas de " + ROLL1.ingredientes + " - " + ROLL8.cantidad*2 + " piezas de " + ROLL8.ingredientes + " - " + ROLL4.cantidad + " " + ROLL4.ingredientes + " - " + ROLL3.cantidad + " piezas de " + ROLL3.ingredientes + " - " + ROLL9.cantidad + " piezas de " + ROLL9.ingredientes + " - " + ROLL5.cantidad + " piezas de " + ROLL5.ingredientes + " - " + "8 Nigiris de salmón ahumado.", 4000);

const arrayCombos= []

arrayCombos.push(COMBO10)
arrayCombos.push(COMBO15)
arrayCombos.push(COMBO20)
arrayCombos.push(COMBO30)
arrayCombos.push(COMBO40)


function averiguarRolls(){
    while(eleccion = 1){
        let opcion = parseInt(prompt("Ingresá un número del 1 al " + arrayRolls.length + " para conocer cada uno de ellos y sus precios. Para volver al menú anterior presioná el número 0."));
        let costo = 0
        if(opcion == 1){
            costo = ROLL1.precio;
            alert("Las " + ROLL1.cantidad + " piezas de " + ROLL1.ingredientes + " cuestan: $ " + costo / 2 )
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
        }else if(opcion == 0){
            combosORolls();
        }else{
            alert("Opción incorrecta")
        }
        continue
    }
}

function averiguarCombos(){
    while(eleccion = 2){
        let opcion = parseInt(prompt("Ingresá el número de piezas del combo que deseas, (10, 15, 20, 30 o 40), para conocer cada uno de ellos y sus precios. Para volver al menú anterior ingresá el número 0."));
        if(opcion == 10){
            alert("El Combo de 10 piezas incluye: " + COMBO10.rolls + " Y cuesta: $" + COMBO10.precio)
        }else if(opcion == 15){
            alert("El Combo de 15 piezas incluye: " + COMBO15.rolls + " Y cuesta: $" + COMBO15.precio)
        }else if(opcion == 20){
            alert("El Combo de 20 piezas incluye: " + COMBO20.rolls + " Y cuesta: $" + COMBO20.precio)
        }else if(opcion == 30){
            alert("El Combo de 30 piezas incluye: " + COMBO30.rolls + " Y cuesta: $" + COMBO30.precio)
        }else if(opcion == 40){
            alert("El Combo de 40 piezas incluye: " + COMBO40.rolls + " Y cuesta: $" + COMBO40.precio)
        }else if(opcion == 0){
            combosORolls();
        }else{
            alert("Opción incorrecta")
        }
        continue
    }
}
function salir(){
    let salida = parseInt(prompt("Desea salir? 1-SI 2-NO"))
    while(true){
    if (salida == 1){
        alert("Gracias")
        break
    }else if (salida == 2){
        combosORolls();
    }else {
        alert("Opción incorrecta")
    }
    continue
    }
}

function combosORolls(){
    let eleccion =0
    while(true ){
        eleccion = parseInt(prompt("Si querés conocer nuestros Rolls, ingresá el número 1. Si queres conocer nuestros Combos, ingresá el 2."));
        if (eleccion == 1){
            averiguarRolls();
        }else if(eleccion == 2){
            averiguarCombos();    
        }else if(eleccion == 9){
            salir();
        }else{
            alert("Opción incorrecta")
        }
        continue
    }
}

alert("Tenemos " + arrayRolls.length + " variedades de Rolls" + " y " + arrayCombos.length + " combos ya armados.")

combosORolls();