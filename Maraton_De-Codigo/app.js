// 1)

// let nombre = prompt("Como te llamas?")
// alert("Hola " + nombre .toUpperCase() + ", " + nombre .toLowerCase() )

// 2) 
// var numero1 = parseInt(prompt("Dame un número"))
// var numero2 = parseInt(prompt("Dame el segundo número"))

// if(numero1 < numero2){
//     let resta = numero2 - numero1;
//     let suma = numero1 + numero2;
//     alert("El resultado de la resta es: " + resta )
//     alert("El resultado de la suma es: " + suma )
// }
// else{
//      resta = numero1 - numero2;
//      suma = numero1 + numero2;
//     alert("El resultado de la suma es: " + suma )
//     alert("El resultado de la resta es: " + resta )
// }

// 3)
// let texto = prompt("Inserte un texto: ")
// let respuesta = confirm("Desea ver el texto en la consola?")
// if(respuesta === true){
//     console.log("Tu mensaje es: " + texto .toUpperCase())
// }
// else if (respuesta === false){
//     alert("Tu mensaje es: " + texto .toUpperCase())
// }

// 4)

// var numero1 = parseInt(prompt("Dame un número"))
// var numero2 = parseInt(prompt("Dame un  segundo número"))
// var resultado;
// var resultado2;
// var operacion = prompt("Seleccione una operacion: A = Suma. B = Resta. C = Multiplicación. D = División. E = Potencia")

// switch (operacion) {
//     case "A":
//         resultado = numero1 + numero2;
//         prompt("El resultado es: " + resultado)
//         break;
//     case "B":
//         resultado = numero1 - numero2;
//         prompt("El resultado es: " + resultado)    
//         break;
//     case "C":
//         resultado = numero1 * numero2;
//         prompt("El resultado es: " + resultado)    
//         break;
//     case "D":
//         resultado = numero1 / numero2;
//         prompt("El resultado es: " + resultado)    
//         break;
//     case "E":
//         resultado = numero1;
//         resultado2 = numero2;
//         prompt("El resultado uno es: ", Math.pow(resultado, 2))    
//         prompt("El resultado dos es: ", Math.pow(resultado2, 2))  
//         break;
// }



// 5) 

// do{
//     var numero1 = parseInt(prompt("Dame un número"))
//     var numero2 = parseInt(prompt("Dame un  segundo número"))
//     var resultado;
//     var resultado2;
//     var operacion = prompt("Seleccione una operacion: A = Suma. B = Resta. C = Multiplicación. D = División. P = Potencia. 0 = Salir")

//     switch (operacion) {
//         case "A":
//             resultado = numero1 + numero2;
//             prompt("El resultado es: " + resultado)
//             break;
//         case "B":
//             resultado = numero1 - numero2;
//             prompt("El resultado es: " + resultado)    
//             break;
//         case "C":
//             resultado = numero1 * numero2;
//             prompt("El resultado es: " + resultado)    
//             break;
//         case "D":
//             resultado = numero1 / numero2;
//             prompt("El resultado es: " + resultado)    
//             break;
//         case "P":
//             resultado = numero1;
//             resultado2 = numero2;
//             prompt("El resultado uno es: ", Math.pow(resultado, 2))    
//             prompt("El resultado dos es: ", Math.pow(resultado2, 2))  
//             break;
//         case "0":
//             alert("Adios")
//             break;
            
//     }
// }while(operacion !=0 )


// 6)

// const alumnos = []

// var nombre;


// do{
//     for (i=0; i <1; i++){
//         nombre = prompt("Dame un nombre")
//         alumnos.push(nombre)
//         var eleccion = prompt("ingrese 0 para salir")
//     }
    
// }while(eleccion !=0 )
// console.log(alumnos)


// 7) 

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

// do{
//     var posicionNumero =parseInt(prompt("Dime un número del 1 al 10 y te devuelvo un personaje"))
// }while(posicionNumero >10 || posicionNumero <1)
    
    
// alert("El personaje que elejiste es "+ " "+ ej7Nombres[posicionNumero].toUpperCase()) 



























