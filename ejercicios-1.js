// Ejercicios de Javascript

// 1. Escribir una función llamada contrasenaValida que reciba un 
// string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
// De lo contrario debe retornar false.

const contrasenaValida = ( data ) => {
    let result = false;
    if ( data === '2Fj(jjbFsuj' || data === 'eoZiugBf&g9') result = true;

    return result;
};

// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) // false


// 2. Escribir una función llamada calcularImpuestos que reciba dos argumentos 
// numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son 
// iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

const calcularImpuestos = ( edad, ingresos ) => {
    if ( edad >= 18 && ingresos >= 1000 ) ingresos *= 0.4;
    else ingresos = 0;

    return ingresos;
};

// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0


// 3. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, 
// es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: peso / altura^2
// Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y 
// retorne un string con las siguientes posibilidades:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

const bmi = ( peso, altura ) => {
    let calcBmi = peso / ( altura * altura );
    let result = "";

    if ( calcBmi < 18.5 ) result = 'Bajo de peso';
    if ( calcBmi >= 18.5 && calcBmi <= 24.9 ) result = 'Normal';
    if ( calcBmi >= 25 && calcBmi <= 29.9 ) result = 'Sobrepeso';
    if ( calcBmi >= 30 ) result = 'Obeso';

    return result;
}

// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"


// 4. Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada 
// elemento en una línea a parte:
let miArreglo = [1, "Hola", 2, "Mundo"];
const imprimirArreglo = ( arreglo ) => {
    arreglo.forEach( ( i ) => {
        console.log( i );
    });
};

// imprimirArreglo( miArreglo );


// 5. Escribe una función llamada likes que reciba un número y retorne un string utilizando 
// el formato de K para miles y M para millones.

// Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

const likes = ( numero ) => {
    if ( numero < 1000 ) return numero.toString();
    else if ( numero < 1000000 ) return Math.floor( numero / 1000) + 'K';
    else return Math.floor( numero / 1000000 ) + 'M';
};

// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

// 6. Escribir una función llamada fizzBuzz que reciba un número y retorne un string 
// de acuerdo a lo siguiente:

// "fizz" si el número es múltiplo de 3.
// "buzz" si el número es múltiplo de 5.
// "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

const fizzBuzz = ( numero ) => {
    if ( numero % 3 === 0 && numero % 5 === 0 ) return "fizzbuzz";
    else if ( numero % 3 === 0) return "fizz";
    else if ( numero % 5 === 0) return "buzz";
    else return `El número no es multiplo de ninguno: ${numero.toString()}`;
};

// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

// 7. Escribir una función llamada contarRango que reciba dos números y retorne cuántos 
// números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer 
// número va a ser menor que el segundo.

const contarRango = ( num1, num2 ) => {

    let contador = 0;
    if ( num1 < num2 ) {
        for ( let i = num1 + 1; i < num2; i++) {
         contador++;
        };

        return contador;
    }

    return 'El primer número es mayor o igual al segundo';
};

// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

// 8. Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final.
// La función debe retornar la suma de los números en ese rango (incluyéndolos).

// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

const sumarRango = ( numInicial, numFinal ) => {
    let suma = 0;

    for ( let i = numInicial; i <= numFinal; i++ ) {
        suma+= i;
    };

    return suma;
};

// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 5


// 9. Escribir una función llamada numeroDeAes que reciba un string y retorne el número 
// de veces que aparece la letra "a":

const numeroDeAes = ( palabra ) => {
    let contador = 0;
    let palabraMinuscula = palabra.toLowerCase();

    for ( let i = 0; i <= palabraMinuscula.length; i++ ) {
        if ( palabraMinuscula[i] === 'a') contador++;
    };


    return contador;
};

// console.log(numeroDeAes("abracAdabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0


// 10. Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter
// (un string de un caracter). La función debe retornar el número de veces que aparece el 
// caracter en el string.

const numeroDeCaracteres = ( palabra, caracter ) => {
    let contador = 0;

    for ( let i = 0; i <= palabra.length; i++ ) {
        if ( palabra[i] === caracter ) contador++;
    };

    return contador;
};

// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

// 11. Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne 
// la suma de todos los elementos.

const sumarArreglo = ( arreglo ) => {
    let suma = 0;
    let i = 0;

    // for ( let i = 0; i < arreglo.length; i++ ) {
    //     suma += arreglo[i]; // 3 + 1 
    // };

    while ( i < arreglo.length ) {
        suma += arreglo[i]; // 3 + 1
        i++;
    };

    return suma;
};

// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0