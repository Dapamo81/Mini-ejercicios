// funcion para restar los dos numeros

function restarNumeros(){
    const num1 = parseFloat(prompt("Ingresar el primer número:"));
    const num2 = parseFloat(prompt("Ingresar el segundo número:"));
    const resultado = num1 - num2;
    document.getElementById("resultadoResta").textContent = "El resultado de la resta es: "+ resultado;
    console.log("Resta:", num1," + ", num2," =", resultado);

}

//funcion para mostrar datos

function mostrarDatos(){
    const nombre = prompt("Ingresa tu nombre");
    const localidad = prompt("¿En que localidad vives?");
    const hobby = prompt("¿Cual es tu hobby?");
    const frase = prompt("Te llamas "+ nombre+ ", vives en "+ localidad+ " y te gusta "+ hobby+ ".");
    document.getElementById("resultado").textContent = frase;
    console.log(frase);
}