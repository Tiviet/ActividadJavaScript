
//Primera funcion del loopdepares

function loopDePares(numero) {
    for (let i = 0; i <= 100; i++) {
      console.log(i); 
      if ((i + numero) % 2 === 0) {
        console.log(`El numero ${i + numero} es par`);
      }
    }
}
  
loopDePares(0);

//Funcion loopdeimpares

function loopDeImpares(numero,palabra){
    for(let i=0; i<=100; i++){
        console.log(i);
        if ((numero + i)% 3 === 0){
            console.log(palabra);
            // Si ponemos este log mostrara solo los impares console.log(i); 
        }
    }
}

loopDeImpares(0,"Hola mundo");

// Funcion sumatoria

function sumatoria(numero){
    let contador = 0;
    for(let i=0;i<=numero;i++){
       contador += i   
    }
    return contador;
}

console.log(sumatoria(8));

// Funcion nuevoArreglo

function nuevoArreglo(numero){
    const arregloVacio = [];
    for(let i=1;i<=numero;i++){ //Inicicializado en 1 para no contar el 0
        arregloVacio.push(i);
     }
     return arregloVacio;
}

console.log(nuevoArreglo(5));

// Funcion split

function split(string){
    const resultado = [];
    for(let i=0;i<string.length;i++){
        resultado.push(string[i]);
    }
    return resultado;
}
console.log(split("Buenas")); 

// Funcion arrayHandler

function arrayHandler(array1,array2){
    if (array1.length !== array2.length) {
        console.log("Los arreglos no tienen la misma longitud"); // Comprobacion de que tengan la misma longitud si no reiniciar el bucle
        return;
    }
    for (let i = 0; i < array1.length; i++) {
        console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
    }
}

arrayHandler([1,2,3,4],["John Coltrane","Chet Baket","Bill Whiters","Matt Elliott"]);

// Funcion palindromo

function palindromo(palabra){
    const palabraMinuscula = palabra.toLowerCase(); // Pasar la palabra a minuscula para que no presente problema al escribir una palabra con mayuscula 
    const palabraAlReves = palabraMinuscula.split('').reverse().join('');
    return palabraMinuscula === palabraAlReves;
}

console.log(palindromo("Ana"));
console.log(palindromo("Enrique"));
