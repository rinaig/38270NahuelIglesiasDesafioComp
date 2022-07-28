//Se comienza con un Mensaje explicando el juego.
alert("Bienvenido a ¡ADIVINA ADIVINADOR! \n \nEl juego consiste en que tendras 4 oportunidades para adivinar un numero entre el 1 y el 20 \n \nTe deseamos mucha suerte! \n \n Pulsa aceptar para ingresar el primer numero! ")

//A continuacion se define el numero aleatorio que se generar cada vez que el player reinicie el juego
const num_system_aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numSystem = num_system_aleatorio(1,20);
// Comentando el let numSystem de arriba y descomentando el de abajo, se puede probar con un numero fijo para verificar el funcionamiento segun los parametros
// let numSystem = 5

// Se definen el numero de oportunidades con las que empieza.
let oportunidades = 1

// Se asigna el numero de oportunidades que va a tener para jugar.
while(oportunidades <=4){

    // en cada repeticion solicitamos que ingrese un nuevo numero
    let numPlayer = Number(prompt("ingresa el numero que deseas adivinar! "))
    
                    //Con este primer IF se verifica que si el numero coincide y de adivinar corta el juego!
                    if(numSystem == numPlayer) {
                        alert("GANASTE FELICITACIONES!!!!!! \n \nAdivinaste el numero secrerto es el " + numSystem + "\n \nTe invitamos a jugar nuevamente cuando lo desees")                    
                    break} 
                            //Con estos Else if define cuan cerca esta del numero con 4 variables diferentes. Y le da un mensaje y las oportunidades restantes.
                            else if(numSystem - numPlayer >= -3 && numSystem - numPlayer <= 3) {
                                alert("SIGUE ASI! Estas Muy muy cerca! \n \nEstas a menos de 3 numeros de distancia \n \nTe quedan " + (4 - oportunidades) + " oportunidades")  }
                            else if(numSystem - numPlayer >= -6 && numSystem - numPlayer <= -4) {
                                 alert("Un Esfuerzo mas y estaras muy cerca! \n \nEstas a menos de 6 numeros de distancia \n \nTe quedan " + (4 - oportunidades) + " oportunidades")}
                            else if(numSystem - numPlayer <= 6 && numSystem - numPlayer >= 4) {
                                 alert("Un Esfuerzo mas y estaras muy cerca! \n \nEstas a menos de 6 numeros de distancia \n \nTe quedan " + (4 - oportunidades) + " oportunidades")}
                            else if (numSystem - numPlayer >= 7 || numSystem - numPlayer <= -7) {
                                alert("Debes esforzarte y acercarte mas! \n \nEstas a mas de 7 numeros de distancia \n \nTe quedan " + (4 - oportunidades) + " oportunidades")}   
oportunidades++         }

// Cuando oportunidades sea mayor a 4 se dara por concluido el juego
if(oportunidades>4){ 
    alert("¡¡¡GAME OVER!!! \n \nSe han agotado las oportunidades \n \n El numero secreto era el "+ numSystem +" \n \n Sin embargo te esperamos a jugar nuevamente cuando quieras!")}     
    
