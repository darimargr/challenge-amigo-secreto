//Programa Principiante de Oracle Next Education. G9.
//Participante: Darimar García.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const campoNombre = document.getElementById('amigo');

function actualizarArrayAmigos(nombre){
  let existe = false;

  //Obtener el elemento de la lista  
  const listaAmigos = document.getElementById('listaAmigos');

  //Limpiar la lista existente
  //listaAmigos.innerHTML = "";

  //Iterar sobre el arreglo para validar que no exista el nombre
  for (let i = 0; i < amigos.length; i++) {
     if (amigos.length !== 0 && amigos[i] == nombre) {
       alert(`Ya el nombre ${nombre} existe en la lista`); 
       existe = true;
       break;        
     } 
  }
  // Agregar elemento a la lista y al arreglo.
  if (existe == false) {
    //Agregar elemento a la lista
    const item = document.createElement('li'); 
    item.textContent = nombre;     
    listaAmigos.appendChild(item);
    //Actualizar el array amigos
    amigos.push(nombre);  
  }
}

function agregarAmigo(){
 
  // Capturar el campo de entrada y quitar los espacios en blanco
  const nombreAmigo = campoNombre.value.trim(); 

  //Validar la entrada
  if (nombreAmigo == "") {                     // Si el campo está en blanco envía un alert
    alert("Por favor, inserte un nombre");
  } else {
    //Actualizar el array amigos
    actualizarArrayAmigos(nombreAmigo);

    // Limpiar el campo de entrada
    campoNombre.value = "";
    campoNombre.focus();   
  }            
}

function sortearAmigo(){
  const resultado = document.getElementById('resultado');
 
  //Validar que la lista amigos tenga algún elemento
  if (amigos.length !== 0) {
    //Determinar el amigo aleatoriamente
    let amigoElegido = parseInt(Math.random() * amigos.length);   
    //Mostrar el amigo elegido
    resultado.textContent = `El amigo secreto es ${amigos[amigoElegido]}`;

  } else {
    alert("Por favor, inserte los nombres de los amigos");
  }
}

